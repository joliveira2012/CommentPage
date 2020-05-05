import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    comments: [],
    text: "",
    loading: true,
    baseUrl: "http://localhost:8080/comments"
  };

  componentWillMount() {
    this.getComments();
  }

  getComments = () => {
    fetch(this.state.baseUrl, {
      method: 'GET',
    }).then((response) => response.json()
      .then((comments) => {
        this.setState({ comments, loading: false })
      })
    ).catch(
      error => console.log(error)
    );
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }

  postComments = () => {
    let { text } = this.state

    fetch(this.state.baseUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: text,
      }),
    }).then(function (response) {
      return response.json();
    }).then((data) => {
      this.setState({ loading: false, text: "" }, this.getComments)
    });
  }

  playerSound = (id) => {
    
      let audio = new Audio("../../audio/comment_31.wav");
      console.log(audio);
      audio.play();
  }

  render() {
    const { comments } = this.state

    return (
      <div className="app center">    
        <div className="content">
          <div className="comment">
            <h4>Comentário</h4>
            <textarea className="w80 h40 border-grey" maxLength="250" value={this.state.text} onChange={this.handleChange} />
            <button className="w80 mt10 border-grey" type="button" onClick={this.postComments}>Cadastrar</button>
          </div>

          <div className="comments">
            <h4>Comentários</h4>
            {comments.length > 0 ? (
              <>
                {comments.map((item) => {
                  return (
                    <div key={item.id} className="center">
                      <div className="w80">
                        {item.text}
                      </div>
                      <div className="w20 mt10">
                        <button className="border-grey ml10" type="button" onClick={() => this.playerSound(item.id)} >Ouvir</button>
                      </div>
                    </div>
                  )
                })}
              </>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

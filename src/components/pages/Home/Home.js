import React from 'react';
import './Home.scss';

class Home extends React.Component {
  changeView = (e) => {
    // const view = e.target.closest('.card').id;
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }

  render() {
    return (
      <div className='Home'>
        <div className="card-deck mt-5">
          <div className="card border-dark" id="friends" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-comments fa-7x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Friends</h6>
              <p className="card-text">Friends</p>
            </div>
          </div>
          <div className="card border-dark" id='newFriend' onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-user-friends fa-7x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">New Friends</h6>
              <p className="card-text">Add New Friends</p>
            </div>
          </div>
          </div>
        <div className="card-deck mt-5">
          <div className="card border-dark" id='holidays' onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-lights-holiday fa=7x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">holidays</h6>
              <p className="card-text">Holidays</p>
            </div>
          </div>
          <div className="card border-dark" id='newHoliday' onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-newspaper fa-7x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">New Holiday</h6>
              <p className="card-text">Add New Holiday</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

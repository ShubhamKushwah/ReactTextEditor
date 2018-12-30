import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col'}>
            <img className={'landing_img'} src={'assets/logo.png'} alt="logo"/>
            <h2 className={'landing_title'}>Code Box</h2>
          </div>
          <div className={'col'}>
            <h2>Lorem Ipsum</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Animi consequatur delectus dicta eligendi fugit id incidunt mollitia, odio perferendis sed.
            <br/>
            <br/>
            A amet dolore est illum nesciunt obcaecati recusandae suscipit veritatis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br/>
            <br/>
            Consectetur impedit, neque possimus quaerat quia quidem quod quos ullam!
            Ad atque consectetur corporis est exercitationem expedita nihil quas totam unde vel!
            <br/>
            <br/>
            Ad atque consectetur corporis est exercitationem expedita nihil quas totam unde vel!
            <br/>
            <button className={'lorem_btn'}>
              Nice Button
            </button>
          </div>
        </div>
      </div>
    );
  }
}
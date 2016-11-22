import ReactDOM from 'react-dom';
import React    from 'react';

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar author={props.author} />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
  );
}
UserInfo.propTypes = {
  author: React.PropTypes.shape({
    name: React.PropTypes.string,
    avatarUrl: React.PropTypes.string,
  }),
};

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  );
}
Avatar.propTypes = {
  author: React.PropTypes.shape({
    name: React.PropTypes.string,
    avatarUrl: React.PropTypes.string,
  }),
};

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}
Comment.propTypes = {
  author: React.PropTypes.shape({
    name: React.PropTypes.string,
    avatarUrl: React.PropTypes.string,
  }),
  text: React.PropTypes.string,
  date: React.PropTypes.string,
};

const element = (<Comment
  author={{
    name: 'Mikaël',
    avatarUrl: 'https://fr.gravatar.com/userimage/31654435/861121bab44174b542f625e11d796268.png?size=200' }}
  text={'I wrote a super comment on my blog'}
  date={new Date().toLocaleString()}
/>);
ReactDOM.render(element, document.getElementById('root'));

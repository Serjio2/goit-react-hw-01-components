export const FriendListItem = ({ friend: {isOnline, avatar, name } }) => {
  return (
    <div>
      <span>{isOnline}</span>
      <img src={avatar} alt="User avatar" />
      <p>{name}</p>
    </div>
  );
};

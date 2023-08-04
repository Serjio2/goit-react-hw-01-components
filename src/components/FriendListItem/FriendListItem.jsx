import { IsOnline } from "./FriendListItem.styled";

export const FriendListItem = ({ friend: {isOnline, avatar, name } }) => {
  return (
    <>
      <IsOnline>{isOnline}</IsOnline>
      <img src={avatar} alt="User avatar" width={48}/>
      <p>{name}</p>
    </>
  );
};

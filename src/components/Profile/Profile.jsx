import { List, LustItem, UserCard } from "./Profile.styled";

export const Profile = ({user}) => {
  return (
    <>
      <UserCard>
        <img src={user.avatar} alt='Avatar'/>
        <p>{user.username}</p>
        <p>@{user.tag}</p>
        <p>{user.location}</p>
      </UserCard>

      <List>
        <LustItem>
          <span>Followers</span>
          <span> {user.stats.followers}</span>
        </LustItem>
        <LustItem>
          <span>Views</span>
          <span> {user.stats.views}</span>
        </LustItem>
        <LustItem>
          <span>Likes</span>
          <span> {user.stats.likes}</span>
        </LustItem>
      </List>
    </>
    
  );
};

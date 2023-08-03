import { Container, UserCard } from "./Profile.styled";

export const Profile = ({user}) => {
  return (
    <Container>
      <UserCard>
        <img src={user.avatar} alt='Avatar'/>
        <p>{user.username}</p>
        <p>@{user.tag}</p>
        <p>{user.location}</p>
      </UserCard>

      <ul>
        <li>
          <span>Followers</span>
          <span> {user.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span> {user.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span> {user.stats.likes}</span>
        </li>
      </ul>
    </Container>
    
  );
};

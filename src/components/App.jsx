import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";

import { GlobalStyle } from "./GlobalStyle";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";

export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Profile user={user}/>
      <Statistics stats={data} title="Upload stats"/>
      <FriendList friends={friends}/>
    </>
  );
};

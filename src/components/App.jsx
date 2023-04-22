import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from '../user.json';
import data from '../data.json';

export const App = () => {
  return (
    <div>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
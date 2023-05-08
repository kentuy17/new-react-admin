import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { authProvider } from "./authProvider";
import { PostList, PostEdit, PostCreate } from "./components/Post";
import { UserList, UserEdit, UserCreate } from "./components/User";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import { AppLayout } from "./layouts/AppLayout";

const dataProvider = restProvider("http://localhost:3000");

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      layout={AppLayout}
    >
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        recordRepresentation={(user) => user.username}
        icon={PeopleIcon}
      />
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
        icon={ArticleIcon}
      />
    </Admin>
  );
}

export default App;

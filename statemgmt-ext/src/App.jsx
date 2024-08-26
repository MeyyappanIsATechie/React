// import Button from "./counter/Button";
// import Value from "./counter/Value";

import AddNew from "./blog-app/AddNew";
import List from "./blog-app/List";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md space-y-4 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Redux Toolkit - Blog List App
        </h1>
        {/* <Button />
        <Value /> */}
        <AddNew />
        <List />
      </div>
    </div>
  );
};

export default App;

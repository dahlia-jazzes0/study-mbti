const USER_DATA = "userdata";

function deleteUserData() {
  sessionStorage.removeItem(USER_DATA);
}

const checkData = () => {
  const haveUserData = sessionStorage.getItem(USER_DATA);
  const parsedUserData = JSON.parse(haveUserData);

  if (parsedUserData == null) return;

  deleteUserData();
};

checkData();

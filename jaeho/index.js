function deleteUserData() {
  const USER_DATA_KEY = "userdata";
  sessionStorage.removeItem(USER_DATA_KEY);
}

deleteUserData();

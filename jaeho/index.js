function deleteUserData() {
  const USER_DATA = "userdata";
  sessionStorage.removeItem(USER_DATA);
}

deleteUserData();

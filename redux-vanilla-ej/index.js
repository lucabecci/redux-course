const BUY_CAKE = "BUY_CAKE";
//action creator
function buyCake() {
  //action
  return {
    //made with global const
    type: BUY_CAKE,
    //made with str(not global const)
    information: "BUY_CAKE",
  };
}

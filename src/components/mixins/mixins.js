export const componentClicked = {
  methods: {
    /**
     * 
     * @param {number} ox offset x
     * @param {number} oy offset y
     * @param {number} ow offset width
     * @param {number} oh offset height
     * @param {number} cx cursor click y coord
     * @param {number} cy cursor click x coord
     */
    checkIfComponentClicked(ox, oy, ow, oh, cx, cy) {
      console.log(ox,oy,ow,oh,cx, cy);
      if( ( ox < cx && cx < ( ow + ox ) ) && ( oy < cy && cy < ( oh + oy ) ) ) {
        return true
      } else {
        return false
      }
    }
  }
}
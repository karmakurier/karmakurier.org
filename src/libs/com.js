import axios from "axios";

export default {

    // postMission() {
    //     // radiovalues als strings
    // },

    getMissionsInRegion(zipCode) {
        return new Promise(resolve => {
            axios.get("/orders/" + zipCode).then(r => resolve(r.data));
        });
    }

}
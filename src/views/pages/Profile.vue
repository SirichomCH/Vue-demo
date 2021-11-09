<template>
  <div class="profile">
    <div class="row">
      <div class="col">
        <div align="center" class="mt-5 ml-3">
          <b-card style="width: 40rem">
            <div align="center">
              <b-img
                src="media/me.jpg"
                color="white"
                width="200px"
                height="200px"
                class="mt-4 ml-3"
                rounded="circle"
                align="center"
                alt="Circle image"
              ></b-img>
            </div>
            <div class="text-center text-dark mt-3">
              <h3>
                Sirichom Changthongkeng
                <span class="font-weight-light">,24</span>
              </h3>
              <div class="h6 font-weight-300">Ramkamhang, Bangkok</div>
              <div class="h6 mt-4">Jumior Vue JS - Frontend Developer</div>
              <div>Chaingmai University, Faculty of Science</div>
              <div class="mt-3">
                <b-icon icon="telephone-forward-fill"></b-icon> 093-124-0560
                <b-icon icon="mailbox2"></b-icon> sirichom.chtk@gmail.com
              </div>
              <div class="mt-3">
                <a href="/files/Sirichom_Resume.pdf" download
                  ><b-button variant="warning" animation="throb">
                    <b-icon
                      icon="cloud-download-fill"
                      animation="throb"
                    ></b-icon>
                    Resume
                  </b-button></a
                >
              </div>
            </div>
          </b-card>
        </div>
      </div>
      <div class="col">
        <div align="left" class="mt-5">
          <b-card style="width: 45rem">
            <div class="text-center text-dark mt-3">
              <b-button variant="outline-danger"
                ><h3>Programming Skill</h3></b-button
              >
              <div class="mt-4">
                <!-- <img
                  v-for="(image, i) in skill"
                  :key="i"
                  class="mr-3"
                  width="40px"
                  height="40px"
                  rounded
                  alt="Rounded image"
                  :src="image"
                /> -->
                <b-img
                  v-for="(image, i) in skill"
                  :key="i"
                  :src="`../media/skill/${image}.png`"
                  width="35px"
                  height="35px"
                  class="mr-3"
                  rounded
                  alt="Rounded image"
                ></b-img>
              </div>
            </div>

            <div class="text-center text-dark mt-5">
              <b-button variant="outline-danger"><h3>My Hobby</h3></b-button>
              <div class="mt-4">
                <!-- <img
                  v-for="(image, i) in skill"
                  :key="i"
                  class="mr-3"
                  width="40px"
                  height="40px"
                  rounded
                  alt="Rounded image"
                  :src="image"
                /> -->
                <b-img
                  v-for="(hobby, idx) in hobbies"
                  :key="idx"
                  :src="`../media/hobby/${hobby}.png`"
                  width="35px"
                  height="35px"
                  class="mr-5"
                  rounded
                  alt="Rounded image"
                ></b-img>
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      skill: [
        "logo",
        "html",
        "bootstrap",
        "python",
        "vscode",
        "jupyter",
        "excel",
        "canva",
        "sql",
      ],
      hobbies: ["rov", "youtube", "tabletennis", "nf", "swim"],
    };
  },
};
</script>

<style scoped>
.profile {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/bg.jpg");
  background-size: cover;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

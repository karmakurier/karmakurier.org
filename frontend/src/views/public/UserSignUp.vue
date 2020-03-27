<template>
  <div class="login-wrapper">
    <div class="form-wrapper">
      <h1 class="title">
        <span>Toll,</span> dass du dabei sein möchtest!
      </h1>
      <p>
        Fülle nachfolgendes Formular in Ruhe aus
        Sobald du dich registriert hast kann es schon losgehen!
      </p>
      <p>Du kannst auf zwei unterschiedlichen Wegen mit unseren Hilfesuchenden in Kontakt treten.</p>
      <p>
        <span>1.</span> Du nimmst aktiv via Anruf Anfragen von Hilfesuchenden entgegen, die sich in deiner Nähe befinden und unterstützt diese bei der Dateneingabe in unser System.
      </p>
      <p>oder</p>
      <p>
        <span>2.</span> Du kannst aktuelle Anfragen von Hilfesuchenden direkt aus unserer Datenbank bestätigen
      </p>
      <p>Anschließend füllen du dein Karmakonto durch gute Taten auf und kannst diese jederzeit bei unseren Karma-Partnern einlösen.</p>
      <p></p>

      <ValidationObserver v-slot="{ handleSubmit }">
        <div class="form">
          <ValidationProvider name="Vorname" rules="required" v-slot="{ errors }" class="firstname">
            <label for="firstname">Vorname</label>
            <input type="text" v-model="signUpData.firstName" />
            <div class="error">{{errors[0]}}</div>
          </ValidationProvider>

          <ValidationProvider name="Nachname" rules="required" v-slot="{ errors }" class="lastname">
            <label for="lastname">Nachname</label>
            <input type="text" v-model="signUpData.lastName" />
            <div class="error">{{errors[0]}}</div>
          </ValidationProvider>

          <ValidationProvider
            name="Straße und HausNr"
            rules="required"
            v-slot="{ errors}"
            class="street"
          >
            <label for="firstname">Straße und HausNr</label>
            <input type="text" v-model="signUpData.street" />
            <div class="error">{{errors[0]}}</div>
          </ValidationProvider>

          <ValidationProvider name="PLZ" rules="required" v-slot="{ errors }" class="zip">
            <label for="zip">PLZ</label>
            <input type="text" v-model="signUpData.zip" />
            <div class="error">{{errors[0]}}</div>
          </ValidationProvider>

          <ValidationProvider name="Stadt" rules="required" v-slot="{ errors}" class="city">
            <label for="city">Stadt</label>
            <input type="text" v-model="signUpData.city" />
            <div class="error">{{errors[0]}}</div>
          </ValidationProvider>

          <ValidationProvider name="E-Mail" rules="required|email" v-slot="{ errors}" class="email">
            <label for="email">E-Mail</label>
            <input type="text" v-model="signUpData.email" />
            <div class="error">{{errors[0]}}</div>
          </ValidationProvider>

          <ValidationProvider name="Telefon" rules="required" v-slot="{ errors }" class="phone">
            <label for="phone">Telefon</label>
            <input type="text" v-model="signUpData.phone" />
            <div class="error">{{errors[0]}}</div>
          </ValidationProvider>

          <ValidationProvider
            name="Passwort"
            rules="required|min:8"
            v-slot="{ errors }"
            class="password"
          >
            <label for="password">Passwort</label>
            <input type="password" v-model="signUpData.password" />
            <div class="error">{{errors[0]}}</div>
          </ValidationProvider>

          <div class="confirm-password">
            <label for="confirm-password">Passwort wiederholen</label>
            <input type="password" v-model="signUpData.confirmedPassword" />
            <div
              class="error"
              v-if="signUpData.password != signUpData.confirmedPassword"
            >Passwörter stimmen nicht überein.</div>
          </div>

          <div class="mobility">
            <label>Ich habe ein:</label>
            <div>
              <input type="checkbox" id="has-car" v-model="signUpData.hasCar" />
              <label for="has-car" class="standard-look">Auto</label>

              <input type="checkbox" id="has-bicycle" v-model="signUpData.hasBicycle" />
              <label for="has-bicycle" class="standard-look">Fahrrad</label>
            </div>
          </div>

          <ValidationProvider
            name="Datenschutz"
            :rules="{ required: { allowFalse: false } }"
            v-slot="{ errors }"
            class="privacy"
          >
            <label for="privacy">Datenschutz</label>
            <div class="privacy-wrapper">
              <input type="checkbox" id="privacy-checkbox" v-model="signUpData.privacy" />
              <label
                class="standard-look"
                for="privacy-checkbox"
              >Ich bin damit einverstanden, dass karmakurier die von mir im vorstehenden Formular angegebenen personenbezogenen Daten für den Zweck der Kontaktaufnahme verarbeitet. Eine Weitergabe an Dritte findet nicht statt, es sei denn es wird ausdrücklich darauf hingewiesen. Unsere Datenschutzerklärung mit sämtlichen Informationen gemäß Art 13 DSGVO zur Datenverarbeitung durch karmakurier und zu Ihren Rechten können Sie unter Datenschutzerklärung einsehen. Den Datenschutzbeauftragten von karmakurier erreichen Sie unter info@karmakurier.de.</label>
              <div class="error">{{errors[0]}}</div>
            </div>
          </ValidationProvider>

          <div class="btn-wrapper">
            <Btn type="is-primary" @click="handleSubmit(signUp)">Jetzt registrieren</Btn>
          </div>
        </div>
      </ValidationObserver>
    </div>
    <p>
      Du hast bereits einen Account? Dann
      <a href="/einloggen">logge dich hier ein.</a>
    </p>
  </div>
</template>

<script>
import Btn from "@/components/atoms/Btn.vue";

export default {
  data() {
    return {
      signUpData: {
        firstName: "",
        lastName: "",
        street: "",
        zip: "",
        city: "",
        email: "",
        phone: "",
        hasCar: "",
        hasBicycle: "",
        privacy: "",
        password: "",
        confirmedPassword: ""
      }
    };
  },
  components: {
    Btn
  },
  methods: {
    async signUp() {
      this.loader = true;
      const self = this;

      this.axios
        .post("/signup", this.signUpData)
        .then(() => {
          self.$router.push("/login/?signup=successful");
          self.loader = false;
        })
        .catch(function() {
          self.loader = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/Branding.scss";

.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 16px 64px 16px;
}

.form-wrapper {
  border-radius: 4px;
  width: 100%;
  max-width: 320px;
  @media only screen and (min-width: 560px) {
    width: 100%;
    max-width: 512px;
  }
  .title {
    // background-color: $primary;
    padding: 16px 0;
  }
  .form {
    padding: 16px 0;
    @media only screen and (min-width: 560px) {
      display: grid;
      grid-column-gap: 16px;
      grid-template-areas:
        "firstname lastname"
        "street street"
        "zip city"
        "email phone"
        "password confirmPassword"
        "mobility mobility"
        "privacy privacy"
        "btn -";
      grid-template-columns: calc(50% - 8px) calc(50% - 8px);

      .firstname {
        grid-area: firstname;
      }
      .lastname {
        grid-area: lastname;
      }
      .street {
        grid-area: street;
      }
      .zip {
        grid-area: zip;
      }
      .city {
        grid-area: city;
      }
      .email {
        grid-area: email;
      }
      .phone {
        grid-area: phone;
      }
      .password {
        grid-area: password;
      }
      .confirm-password {
        grid-area: confirmPassword;
      }
      .mobility {
        grid-area: mobility;
        margin-bottom: 16px;
        label {
          margin-right: 16px;
        }
      }
      .privacy {
        grid-area: privacy;
        margin-bottom: 8px;
      }
      .btn {
        grid-area: btn;
      }
    }
  }
}

p {
  width: 100%;
  max-width: 320px;
  margin-top: 12px;
  span {
    color: $secondary;
    font-weight: 700;
  }
  @media only screen and (min-width: 560px) {
    width: 100%;
    max-width: 512px;
    // padding: 16px 0;
  }
}
</style>

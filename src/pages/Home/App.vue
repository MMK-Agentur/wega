<template>
  <section class="bg-darkest">
        <div class="page-container" style="min-height: auto;">
            <div class="title-container--light">
                <h3 class="title">Kontakt</h3>
                <div class="row mt-5">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="contact-info">
                            <h6>WEGA Invest GmbH
                            </h6>
                            <p>Sporerstraße 3<br>
                                80333 München
                                </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <form @submit="sendEmail">
                            <div class="form-group ">
                                <textarea v-model="message" class="form-control form-contact" id="exampleFormControlTextarea1" rows="3" placeholder="Ihre Anfrage"></textarea>
                              </div>
                              <button type="submit" class="btn btn-lightest">Senden</button>
                        </form>
                    </div>   
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>



export default {
  name: 'App',
   data() {
    return {
      message:''
    }
  },
  methods:{
    sendEmail: async function(e){
      
        this.axios.post(process.env.VUE_APP_MAIL_WEGA, {message:this.message })
        .then(() => console.log("ok"))
        .catch(e=> console.log(e))

        this.message=''
    
         e.preventDefault()
      }
    
   
    }
  }

</script>

<style>

</style>

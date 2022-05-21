<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Content goes here -->
            <h3 class="text-center">Create Students</h3>
            <form @submit.prevent = "handleSubmitForm">
                <div class="form-group mb-3 mt-3">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model = "student.name" required>
                </div>
                <div class="form-group mb-3 mt-3">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="student.email" required>
                </div>

                <div class="form-group mb-3 mt-3">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="student.phone" required>
                </div>

                <div class="form-grou mb-3 mt-3">
                    <button class="btn btn-danger btn-block col-md-12">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                student:{
                    name : '',
                    email : '',
                    phone : ''
                }
            }
        },
        methods: {
            handleSubmitForm(){
                let apiURL = 'http://localhost:3030/api/create_student';
                
                axios.post(apiURL, this.student).then(() => {
                  this.$router.push('/view')
                  this.student = {
                    name: '',
                    email: '',
                    phone: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>
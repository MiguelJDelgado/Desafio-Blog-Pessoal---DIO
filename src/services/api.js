import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://dcvopwclfiptxajslsfl.supabase.co/rest/v1/',
    headers: {
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdm9wd2NsZmlwdHhhanNsc2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3OTYzMjcsImV4cCI6MjA0NzM3MjMyN30.rKO6ei4jwZ9idastO77nzhHJ8VnYoiQtWFKMEMhWn6o", 
                authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdm9wd2NsZmlwdHhhanNsc2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3OTYzMjcsImV4cCI6MjA0NzM3MjMyN30.rKO6ei4jwZ9idastO77nzhHJ8VnYoiQtWFKMEMhWn6o"
    }
})
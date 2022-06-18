class Github{
    constructor(){
        this.client_id = `0b91fda73150a201dcf9`;
        this.client_secret = `bb9ac1174a94e205e6db370b0bc85476f6410f66`;
        this.repos_count = 5;
        this.repos_sort = `created:asc`;
    }
    async getuser(user){
   const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
   const profile = await response.json();

   const repos_response = await repos.json();
   
   return {
       profile : profile,
       repos : repos
   }
    }
}
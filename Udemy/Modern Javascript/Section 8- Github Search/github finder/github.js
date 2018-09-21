class GitHub {
  constructor() {
    this.client_id = '93aff38a20732a7cd7c0';
    this.client_secret = '95f422b4b8bd29583cc8ec65dc795fde20f252ce';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}
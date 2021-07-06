import React, { Component, Fragment } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import { SplitLayout } from "./components/split-layout/split-layout.component";
import { Copyright } from "./components/copyright/copyright.component";
import { SocialLinks } from "./components/social-links/social-links.component";

class App extends Component {
  constructor() {
    super();

    // Stateful Component
    this.state = {
      characters: [],
      searchInput: "",
      socialAccounts: [
        {
          icon: "fab fa-twitter",
          link: "https://twitter.com/masseffect"
        },
        {
          icon: "fab fa-instagram",
          link: "https://www.instagram.com/masseffect/"
        },
        {
          icon: "fab fa-linkedin",
          link: "https://www.linkedin.com/in/janevalencia/"
        },
        {
          icon: "fab fa-github",
          link: "https://github.com/janevalencia/react-basic/tree/prod/mass-effect-wiki"
        }
      ]
    };
  }

  // Fetching characters data from the API
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ characters: users }));
  }

  // Update state based on search input
  setSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value.toLowerCase(),
    });
  };

  // Filter the characters based on the search input
  getFilteredCharacters() {
    const { characters, searchInput } = this.state;
    return characters.filter((character) =>
      character.name.toLowerCase().includes(searchInput)
    );
  }

  render() {
    return (
      <Fragment>
        <header>
          <h1>Mass Effect's Characters</h1>
          <SearchBox
            placeholder="Search by name"
            handleChange={this.setSearchInput}
          />
        </header>
        <main>
          <CardList characters={this.getFilteredCharacters()} />
        </main>
        <footer>
          <SplitLayout 
            left={<Copyright title="Introducing React by Jane Valencia" />} 
            right={<SocialLinks accounts={this.state.socialAccounts} />} 
          />
        </footer>
      </Fragment>
    );
  }
}

export default App;

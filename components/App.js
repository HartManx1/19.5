var GIPHY_API_URL = "https://api.giphy.com";
var GIPHY_PUB_KEY = "QQzckgwmUW6c75r7INr91g3OHZEsPRwe";


App = React.createClass({
    getInitialState() {
        return {
            loading: false,
            searchingText: '',
            gif: {}
        };
    },

    handleSearch: function (searchingText) {
        this.setState({
            loading: true
        });

        this.getGif(searchingText).then(gif => {  // 3.
            this.setState({  // 4
                loading: false,  // a
                gif: gif,  // b
                searchingText: searchingText  // c
            });
        })
            .catch(error => console.error('Error', error));
    },

    getGif: function (searchingText) {  // 1.
        return new Promise(function (resolve, reject) {
            var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;  // 2.
            var xhr = new XMLHttpRequest();  // 3.
            xhr.onload = function () {
                if (xhr.status === 200) {
                    resolve(gif);
                }
                else {
                    reject(error);
                }
            };
            request.open('GET', url);
            xhr.send();
        });
    },

    render: function() {

        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };

        return (
            <div style={styles}>
                <h1>Wyszukiwarka GIFow!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
                <Search
                    onSearch={this.handleSearch} />
                <Gif
                    loading={this.state.loading}
                    url={this.state.gif.url}
                    sourceUrl={this.state.gif.sourceUrl} />
            </div>
        );
    }
});
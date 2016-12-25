import  React from 'react'

export default function accordion(Component) {
    return class WrapperComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                openItemId: false
            };
        };

        render() {
            return <Component {...this.props} isOpen={this.isOpen} toggleOpenItem={this.toggleOpenItem}/>
        }

        isOpen = id => {
            console.log(id);
            return this.state.openItemId == id
        }


        toggleOpenItem = id => ev => {
            this.setState({
                openItemId: this.state.openItemId == id ? false : id
            })
        }

    }
}
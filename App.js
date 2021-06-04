import React from 'react';
import {Text} from 'react-native';
import withCodePush from './codepush';


class App extends React.Component {

    render() {
        return (
            <>
                <Text>
                    hello i am a react native app, i am good, but some time i am not able to do it
                </Text>
            </>
        );
    }
}

export default withCodePush(App);

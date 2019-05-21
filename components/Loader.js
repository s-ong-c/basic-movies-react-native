import React from 'react';
import { ActivityIndicator} from 'react-native';
import { TINT_COLOR, BG_COLOR} from '../constants/Color';
import styled from 'styled-components';


const Container = styled.View`
        backgroundColor: ${BG_COLOR};
        flex: 1;
        justify-content: center;
        padding-horizontal: 10px;
`;

export default () => (
    <Container>
       <ActivityIndicator color={TINT_COLOR} />
    </Container>
);
import React from 'react';
import ProfileContent from '~/components/ProfileContent';
import ProfileNav from '~/components/ProfileNav';
import { FlexLayout } from '~/layouts';

function Profile() {
    return (
        <FlexLayout aside={<ProfileNav />}>
            <ProfileContent />
        </FlexLayout>
    );
}

export default Profile;

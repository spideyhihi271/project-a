import Default from './Default';
import Slider from './Slider';

function Lists({ type }) {
    // Check Type
    let Layout = Default;
    if (type === 1) Layout = Slider;
    return (
        <>
            <Layout />
        </>
    );
}

export default Lists;

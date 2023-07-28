import React from 'react';
import SearchBox from '~/components/SearchBox';
import SearchResult from '~/components/SearchResult/SearchResult';

function Search() {
    const tagResult = [
        {
            id: 0,
            tagName: 'Lưỡi gươm diệt quỷ',
        },
        {
            id: 2,
            tagName: 'Thanh gươm diệt quỷ chuyến tàu vô tận',
        },
        {
            id: 3,
            tagName: 'Thanh gươm diệt quỷ chuyến tàu vô tận',
        },
        {
            id: 4,
            tagName: 'Thanh gươm diệt quỷ chuyến tàu vô tận',
        },
        {
            id: 5,
            tagName: 'Thanh gươm diệt quỷ chuyến tàu vô tận',
        },
        {
            id: 6,
            tagName: 'Thanh gươm diệt quỷ chuyến tàu vô tận',
        },
        {
            id: 7,
            tagName: 'Thanh gươm diệt quỷ chuyến tàu vô tận',
        },
        {
            id: 8,
            tagName: 'Thanh gươm diệt quỷ chuyến tàu vô tận',
        },
        {
            id: 9,
            tagName: 'Thanh gươm diệt quỷ chuyến tàu vô tận',
        },
        {
            id: 10,
            tagName: 'Thanh gươm diệt quỷ chuyến tàu vô tận',
        },
        {
            id: 11,
            tagName: 'Thanh gươm diệt quỷ chuyến tàu vô tận',
        },
    ];
    const movieResult = [
        {
            bg: 'https://cdn.tuoitre.vn/thumb_w/1060/471584752817336320/2023/6/5/02-1685933870454878648234.jpg',
        },
        {
            bg: 'https://i-ngoisao.vnecdn.net/2022/12/29/em-va-trinh-9233-1672307425.jpg',
        },
        {
            bg: 'https://tuyengiao.vn/Uploads/2016/1/6/260.jpg',
        },
        {
            bg: 'https://media.vneconomy.vn/w800/images/upload/2023/03/13/chi-chi-em-em3.jpg',
        },
        {
            bg: 'https://bvhttdl.mediacdn.vn/291773308735864832/2021/11/30/phim1-1638237840924-1638237841320473590674.jpg',
        },
        {
            bg: 'https://gamek.mediacdn.vn/zoom/600_315/2019/8/12/avata-156558052816668086072.jpg',
        },
        {
            bg: 'https://simg.zalopay.com.vn/zlp-website/assets/phim_hollywood_Series_Biet_Doi_Sieu_Anh_Hung_The_Avengers_2012_2019_4f7c9a8135.jpg',
        },
    ];
    return (
        <>
            <SearchBox />
            <SearchResult title={'Từ khóa liên quan'} data={tagResult} isTag />
            <SearchResult title={'Kết quả tìm kiếm'} data={movieResult} />
        </>
    );
}

export default Search;

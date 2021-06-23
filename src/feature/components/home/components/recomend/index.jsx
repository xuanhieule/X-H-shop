import React from 'react'
import RecommendMen from './components/men'
import RecommendPhone from './components/phone'
import RecommendWoman from './components/woman'


Recommend.propTypes = {

}

function Recommend(props) {
    return (
        <div>
            <RecommendMen/>
            <RecommendWoman/>
            <RecommendPhone/>
        </div>
    )
}
export default Recommend


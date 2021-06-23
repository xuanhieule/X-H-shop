import React from 'react'
import PropTypes from 'prop-types'

import RecommendMen from './components/men'
import RecommendWoman from './components/woman'
import RecommendPhone from './components/phone'

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


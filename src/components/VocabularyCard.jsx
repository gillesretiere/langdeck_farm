import React from 'react'

const VocabularyCard = ({vocabulary}) => {
    let {alphabet, vocabulary_unit, lemma, translation_ai,}=vocabulary;
  return (
    <>
<section data-theme="dark">
  <div className="box">
        <div className="v-card flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
          <span className="basis-1/4 pr-2 flex justify-center">{alphabet}</span>
          <span className="basis-3/4 pr-2 flex justify-start">
            <div className="flex flex-col items-start justify-items-start">
            <span className="basis-1/3 pl-5 pr-2 text-xl">{vocabulary_unit}</span>
            <span className="basis-1/3 pl-5 pr-2">{lemma}</span>
            <span className="basis-1/3 pl-5 pr-2 text-red-200">{translation_ai}</span>
            </div>
          </span>
        </div>
  </div>
</section>    

    </>
  )
}

export default VocabularyCard
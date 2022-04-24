import React, { forwardRef } from 'react';


let SampleMolecule = forwardRef((props: any, ref: any) => {
    return <div ref={ref}>Sample Molecule</div>
})

export default Object.assign(SampleMolecule)
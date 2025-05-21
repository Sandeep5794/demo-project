import React from 'react'
import Container from '../ui/Container'
import Card from '../ui/Card'

const SubBodyComponent = () => {
  return (
    <>
        <section className='sub-body xl:py-8 py-4 sm:py-6 bg-gray-100'>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Card data="Sub Body"/>
                    <Card data="Sub Body"/>
                </div>
            </Container>
        </section>
    </>
  )
}

export default SubBodyComponent
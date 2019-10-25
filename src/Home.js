import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from 'react-bootstrap/Media'

import {MyCard} from './components/MyCard';

export const Home = () => {

  return(

    <div className="mt-5">


    <h1>Hello Home</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Enim neque volutpat ac tincidunt. Augue mauris augue neque gravida in fermentum. Adipiscing bibendum est ultricies integer quis auctor elit. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Pretium viverra suspendisse potenti nullam. Eget aliquet nibh praesent tristique magna sit amet. Ultrices sagittis orci a scelerisque purus semper eget duis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Phasellus vestibulum lorem sed risus ultricies. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Eu turpis egestas pretium aenean pharetra magna ac placerat. Ipsum dolor sit amet consectetur adipiscing elit. Viverra orci sagittis eu volutpat odio facilisis mauris. Sapien et ligula ullamcorper malesuada. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Aliquam sem et tortor consequat id.
    </p>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <MyCard
              title="Photo 1!"
              image="https://images.pexels.com/photos/2780349/pexels-photo-2780349.jpeg"
              text="Lorem ispum 1"
              button="Mas info"
            />
          </Col>

          <Col xs={12} md={4}>
            <MyCard
              title="Photo 2!"
              image="https://images.pexels.com/photos/1816593/pexels-photo-1816593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              text="Lorem ispum 2"
              button="Mas info 2"
            />
          </Col>

          <Col xs={12} md={4}>
          <MyCard
            title="Photo 3!"
            image="https://images.pexels.com/photos/3112008/pexels-photo-3112008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            text="Lorem ispum 3"
            button="Mas info 3"
          />
          </Col>
        </Row>

        <Row>
          <Col>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://dummyimage.com/75x75/000/fff"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Media Heading</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
          </Col>
        </Row>
      </Container>


      Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Ornare lectus sit amet est placerat in egestas erat imperdiet. Id volutpat lacus laoreet non curabitur. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Molestie ac feugiat sed lectus vestibulum mattis. Et malesuada fames ac turpis egestas sed tempus. Adipiscing elit duis tristique sollicitudin nibh sit. Sed enim ut sem viverra aliquet eget sit amet tellus. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Sit amet consectetur adipiscing elit duis. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Sed risus ultricies tristique nulla aliquet. Faucibus et molestie ac feugiat sed lectus vestibulum. Adipiscing bibendum est ultricies integer quis auctor. Sit amet massa vitae tortor. Metus aliquam eleifend mi in nulla. Gravida in fermentum et sollicitudin ac orci phasellus. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Pellentesque dignissim enim sit amet. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et.

      Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Suspendisse in est ante in nibh mauris cursus. Id aliquet risus feugiat in. Dignissim sodales ut eu sem integer. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Sed sed risus pretium quam vulputate. Cursus vitae congue mauris rhoncus. Adipiscing elit pellentesque habitant morbi tristique senectus et. Sed felis eget velit aliquet sagittis id consectetur. Sapien nec sagittis aliquam malesuada bibendum. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Quis viverra nibh cras pulvinar. Congue eu consequat ac felis donec et odio. Condimentum mattis pellentesque id nibh tortor. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Placerat in egestas erat imperdiet sed euismod nisi porta. In cursus turpis massa tincidunt dui.

      Ut consequat semper viverra nam libero. Elit at imperdiet dui accumsan sit amet. Interdum velit laoreet id donec ultrices tincidunt arcu. Bibendum at varius vel pharetra vel turpis. Augue lacus viverra vitae congue eu consequat. Sed risus ultricies tristique nulla. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Gravida in fermentum et sollicitudin ac. Nunc non blandit massa enim nec dui. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Ac tortor dignissim convallis aenean et tortor at risus viverra. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim.

      Sagittis nisl rhoncus mattis rhoncus urna. Senectus et netus et malesuada fames ac. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Nibh nisl condimentum id venenatis. Feugiat pretium nibh ipsum consequat nisl vel. Fames ac turpis egestas integer eget aliquet nibh praesent. Sed lectus vestibulum mattis ullamcorper velit sed. Purus semper eget duis at tellus at urna condimentum. Vulputate dignissim suspendisse in est ante in nibh. Ante metus dictum at tempor commodo ullamcorper a lacus.

      Vel quam elementum pulvinar etiam non quam lacus. Magna etiam tempor orci eu. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Diam phasellus vestibulum lorem sed. Eget felis eget nunc lobortis. Mi sit amet mauris commodo quis. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Urna molestie at elementum eu facilisis sed odio morbi. Magna eget est lorem ipsum dolor. Sed arcu non odio euismod lacinia at quis. Lectus sit amet est placerat in egestas erat. Fusce id velit ut tortor pretium viverra suspendisse.

      Amet nisl suscipit adipiscing bibendum est. Vel risus commodo viverra maecenas accumsan. Lacus vel facilisis volutpat est velit egestas. Enim tortor at auctor urna nunc id cursus. Sed id semper risus in. Dictum sit amet justo donec enim diam vulputate ut pharetra. Eget arcu dictum varius duis at consectetur lorem donec massa. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Quis vel eros donec ac odio tempor orci dapibus. Facilisis volutpat est velit egestas dui.

      Id venenatis a condimentum vitae sapien pellentesque habitant. Metus dictum at tempor commodo. At risus viverra adipiscing at in tellus. Molestie a iaculis at erat. Vel facilisis volutpat est velit egestas dui id. Euismod quis viverra nibh cras pulvinar. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Quisque id diam vel quam elementum. Libero nunc consequat interdum varius sit amet mattis. Maecenas sed enim ut sem viverra aliquet eget. Amet mauris commodo quis imperdiet. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Suspendisse sed nisi lacus sed. Risus quis varius quam quisque id diam vel. Nulla facilisi etiam dignissim diam. Lacinia quis vel eros donec. Eget nullam non nisi est sit amet facilisis. Egestas congue quisque egestas diam in arcu cursus euismod. Dui ut ornare lectus sit amet.

      Viverra nibh cras pulvinar mattis. Nunc id cursus metus aliquam. Ante in nibh mauris cursus mattis molestie a iaculis. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Amet risus nullam eget felis eget. Lectus magna fringilla urna porttitor rhoncus dolor purus. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Cursus euismod quis viverra nibh cras. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Sed viverra tellus in hac habitasse platea dictumst. Iaculis at erat pellentesque adipiscing commodo elit at. Aliquam sem et tortor consequat id porta nibh venenatis. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Nunc aliquet bibendum enim facilisis gravida neque convallis. Quam pellentesque nec nam aliquam sem et.

      Vel facilisis volutpat est velit egestas dui id ornare. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Turpis egestas integer eget aliquet. Mi proin sed libero enim sed faucibus. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Adipiscing elit ut aliquam purus sit amet. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Nibh sed pulvinar proin gravida hendrerit lectus a. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.

    </div>
  )
}

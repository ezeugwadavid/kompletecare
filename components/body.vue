<template>
  <div class="section">
     <div class="row no-gutters">
      <div class="head pr-2 py-4 w-100 d-flex justify-content-end">
        <div class="tour my-auto mr-5">Take a tour</div>
        <div class="message my-auto mr-3"><img class="mb-1 mr-3" src="~/assets/images/messages-group.svg" /></div>
        <div class="notification my-auto mr-3"><img class="mb-1 mr-3" src="~/assets/images/notifications.svg" /></div>
        <div class="avatar my-auto mr-3"><img class="mb-1 mr-3" src="~/assets/images/profile-avatar.svg" /></div>

      </div>
    </div>

    <div class="row ml-5 no-gutters">
      <div class="heading col-12">Update Patient Medical Record</div>
      <div class="desc col-12">Click the tab to view and edit patient medical details</div>
      <div class="mt-4 p-5 bg-white col-10">
        <div class="row row-cols-4 no-gutters">
          <div class="x-ray mb-2 col-12">
            X-Ray
          </div>

          <div class="col mt-3">
            <div class="select-box d-flex">
              <input type="checkbox" class="checkbox  mt-2" id="chest" name="chest" value="chest">
              <div class="part ml-2">Chest</div>
            </div>
          </div>
          <div class="col mt-3">
          <div class="select-box d-flex">
            <input type="checkbox" id="cervical" class="checkbox mt-2" name="cervical" value="cervical">
            <div class="part ml-2" >Cervical Vertebrea</div>
          </div>
        </div>
          <div class="col mt-3">
            <div class="select-box d-flex">
            <input type="checkbox" id="Thoracic" class="checkbox mt-2" name="Thoracic" value="Thoracic">
            <div class="part ml-2" >Thoracic Vertibra</div>
          </div>
        </div>
        </div>

        <div class="row mt-3 no-gutters">
          <div class="col-12">
          <hr>
          </div>
        </div>







        <div class="row mt-3 row-cols-4 no-gutters">
          <div class="x-ray mb-2 col-12">
            Ultra Sound Scan
          </div>

          <div class="col mt-3">
            <div class="select-box d-flex">
              <input type="checkbox" class="checkbox  mt-2" id="obstetric" name="obstetric" value="obstetric">
              <div class="part ml-2">Obstetric</div>
            </div>
          </div>
         
        </div>



        <div class="row mt-3 no-gutters">
          <div class="col-12">
          <hr>
          </div>
        </div>


        <div class="row no-gutters">
        <div class="col-5 mr-5">
          <div class="label">CT Scan</div>
          <img class="drop-down-input" src="~/assets/images/arrow down.svg" />
          <input placeholder="*Specify" class="input-field" type="text">
        </div>
        <div class="col-5">
          <div class="label">MRI</div>
          <img class="drop-down-input" src="~/assets/images/arrow down.svg" />
          <input placeholder="*Specify" class="input-field" type="text">
        </div>
        </div>



        <div class="row mt-4 no-gutters">
          <div class="col-11 d-flex justify-content-end">
           <button class="button mr-1">Save and Send</button>
          </div>
        </div>













      </div>
    </div>
  </div>

  

  

</template>

<script>
export default {
    name: 'AppBody'
}
</script>

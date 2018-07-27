const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getLocation = () =>{
  wx.getLocation({
    type:'gcj02',
    success: function(res) {
      var latitude = res.latitude;
      var longitude = res.longitude;
      var speed = res.speed;
      var altitude = res.altitude;
      console.log(res);
    },
    fail:function(){

    }
  })
}

module.exports = {
  formatTime: formatTime,
  getLocation: getLocation
}

(function (env, factory) {
  if (typeof module !== "undefined" && module.exports) {
    module.exports = factory();
  } else {
    env.FlightTicket = factory();
  }
})(this, function () {
  class FlightTicket {
    constructor(
      seatNum,
      flightNum,
      departureAirport,
      arrivalAirport,
      travelDate,
    ) {
      this.seatNum = seatNum;
      this.flightNum = flightNum;
      this.departureAirport = departureAirport;
      this.arrivalAirport = arrivalAirport;
      this.travelDate = travelDate;
    }

    getInfo() {
      return {
        seatNum: this.seatNum,
        flightNum: this.flightNum,
        departureAirport: this.departureAirport,
        arrivalAirport: this.arrivalAirport,
        travelDate: this.travelDate,
      };
    }

    update(property, val) {
      if (this.hasOwnProperty(property)) {
        this[property] = val;
      } else {
        console.log("please enter the right property");
      }
    }

    displayTicket() {
      return `
            Flight Ticket
            -------------
            Flight Number : ${this.flightNum}
            Seat Number   : ${this.seatNum}
            From          : ${this.departureAirport}
            To            : ${this.arrivalAirport}
            Travel Date   : ${this.travelDate}
            `;
    }
  }

  return FlightTicket;
});



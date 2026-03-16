(function (env, factory) {
  if (typeof module !== "undefined" && module.exports) {
    module.exports = factory();
  } else {
    env.FlightTicket = factory();
  }
})(this, function () {
  class FlightTicket {
    #ticketId;
    #flightNumber;
    #seatNumber;
    #departureAirport;
    #arrivalAirport;
    #travelDate;
    #passengerName;
    #status;

    constructor() {}

    #validateString(value, fieldName) {
      if (typeof value !== "string" || value.trim() === "") {
        throw new Error(`${fieldName} must be a non-empty string`);
      }
    }

    #validateDate(value) {
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        throw new Error("travelDate must be a valid date");
      }
    }

    // #validateStatus(value) {
    //   const allowed = ["booked", "cancelled"];
    //   if (!allowed.includes(value)) {
    //     throw new Error("status must be 'booked' or 'cancelled'");
    //   }
    // }

    createTicket(
      ticketId,
      flightNumber,
      seatNumber,
      departureAirport,
      arrivalAirport,
      travelDate,
      passengerName,
    ) {
      this.#validateString(ticketId, "ticketId");
      this.#validateString(flightNumber, "flightNumber");
      this.#validateString(seatNumber, "seatNumber");
      this.#validateString(departureAirport, "departureAirport");
      this.#validateString(arrivalAirport, "arrivalAirport");
      this.#validateString(passengerName, "passengerName");

      this.#validateDate(travelDate);

      this.#ticketId = ticketId;
      this.#flightNumber = flightNumber;
      this.#seatNumber = seatNumber;
      this.#departureAirport = departureAirport;
      this.#arrivalAirport = arrivalAirport;
      this.#travelDate = new Date(travelDate);
      this.#passengerName = passengerName;
      this.#status = "booked";

      return this;
    }

    getTicketInfo() {
      return {
        ticketId: this.ticketId,
        flightNumber: this.flightNumber,
        seatNumber: this.seatNumber,
        departureAirport: this.departureAirport,
        arrivalAirport: this.arrivalAirport,
        travelDate: this.travelDate,
        passengerName: this.passengerName,
        status: this.status,
      };
    }

    #ensureNotCancelled() {
      if (this.#status === "cancelled") {
        throw new Error("Cannot modify a cancelled ticket");
      }
    }

    updateSeat(newSeatNumber) {
      this.#ensureNotCancelled();

      this.#validateString(newSeatNumber, "seatNumber");

      this.#seatNumber = newSeatNumber;

      return this.#seatNumber;
    }

    cancelTicket() {
      this.#ensureNotCancelled();

      this.#status = "cancelled";

      return this.#status;
    }

    updateDepartureAirport(newAirport) {
      this.#ensureNotCancelled();

      this.#validateString(newAirport, "departureAirport");

      this.#departureAirport = newAirport;

      return this.#departureAirport;
    }

    updateArrivalAirport(newAirport) {
      this.#ensureNotCancelled();

      this.#validateString(newAirport, "arrivalAirport");

      this.#arrivalAirport = newAirport;

      return this.#arrivalAirport;
    }

    updateTravelDate(newDate) {
      this.#ensureNotCancelled();

      this.#validateDate(newDate);

      this.#travelDate = new Date(newDate);

      return this.#travelDate;
    }

    updatePassengerName(newName) {
      this.#ensureNotCancelled();

      this.#validateString(newName, "passengerName");

      this.#passengerName = newName;

      return this.#passengerName;
    }

    displayTicket() {
      return `
    ------------------------------
    Flight Ticket
    ------------------------------
    Ticket ID       : ${this.#ticketId}
    Passenger       : ${this.#passengerName}
    Flight Number   : ${this.#flightNumber}
    Seat Number     : ${this.#seatNumber}
    From            : ${this.#departureAirport}
    To              : ${this.#arrivalAirport}
    Travel Date     : ${this.#travelDate}
    Status          : ${this.#status}
    ------------------------------
    `;
    }
  }

  return FlightTicket;
});

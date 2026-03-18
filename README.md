# Flight Ticket Module (UMD)

`flight-ticket-module-mearn-r2` is a **simple, lightweight UMD module** to manage flight tickets in JavaScript. It is designed for both **Node.js** and **browser** environments.

It allows you to:

- Create a flight ticket
- Display ticket information
- Update ticket details safely
- Cancel tickets

The module uses **private properties** for encapsulation and includes **input validation** to prevent incorrect data.

---

## Table of Contents

- [Installation](#installation)
- [How it Works](#how-it-works)
- [Usage Examples](#usage-examples)
  - [Node.js](#nodejs-example)
  - [Browser](#browser-example)
- [FlightTicket Class Methods](#flightticket-class-methods)
- [License](#license)

---

## Installation

Install the module via npm:

```bash
npm install flight-ticket-module-mearn-r2
```

---

## How it Works

1. Import the `FlightTicket` class from the module.

2. Create a new instance of `FlightTicket`.

3. Use `createTicket()` to initialize ticket information.

4. Access or modify ticket data using the available methods.

5. Display ticket information using `displayTicket()`.

All updates are validated and private properties prevent direct manipulation of internal data.

---

## Usage Examples

### Node.js Example

```JavaScript
const FlightTicket = require("flight-ticket-module-mearn-r2");

const ticket = new FlightTicket();

ticket.createTicket(
 "T1001", "MS202","10A", "Cairo", "Dubai", "2026-06-10","Omar Ezzat"
);

console.log(ticket.displayTicket());

// Update some details
ticket.updatePassengerName("Ahmed Ali");
ticket.updateSeat("12C");
ticket.updateDepartureAirport("Alexandria");

console.log(ticket.getTicketInfo());

// Cancel ticket
ticket.cancelTicket();
console.log(ticket.displayTicket());
```

### Browser Example

```HTML
<script src="flight.js"></script>
<script>
  const ticket = new FlightTicket();

  ticket.createTicket(
    "T1002", "EK202","15B", "Cairo", "London", "2026-07-15", "Omar Ezzat"
  });

  console.log(ticket.displayTicket());

  ticket.updatePassengerName("Ahmed Ali");
  ticket.updateSeat("16D");
</script>
```

---

## FlightTicket Class Methods

| Method                                                                                                                    | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `createTicket({ticketId, flightNumber, seatNumber, departureAirport, arrivalAirport, travelDate, passengerName, status})` | Initializes a ticket with all required information. Default status is `"booked"`. Validates all inputs. |
| `getTicketInfo()`                                                                                                         | Returns an object containing all ticket details.                                                        |
| `updateSeat(newSeatNumber)`                                                                                               | Updates the seat number if the ticket is not cancelled. Validates input.                                |
| `updatePassengerName(newName)`                                                                                            | Updates passenger name if the ticket is not cancelled. Validates input.                                 |
| `updateDepartureAirport(newAirport)`                                                                                      | Updates the departure airport if the ticket is not cancelled. Validates input.                          |
| `updateArrivalAirport(newAirport)`                                                                                        | Updates the arrival airport if the ticket is not cancelled. Validates input.                            |
| `updateTravelDate(newDate)`                                                                                               | Updates travel date if the ticket is not cancelled. Validates input as a proper date.                   |
| `cancelTicket()`                                                                                                          | Changes ticket status to `"cancelled"`. Throws an error if already cancelled.                           |
| `displayTicket()`                                                                                                         | Returns a formatted string representing the ticket information.                                         |

**Private Properties**: All data fields (`#ticketId`, `#flightNumber`, `#seatNumber`, `#departureAirport`, `#arrivalAirport`, `#travelDate`, `#passengerName`, `#status`) are private and can only be modified using the methods above.

---

## License

This project is licensed under the ISC License.  
© 2026 Omar Ezzat

import Format from "@/layout/format";
import axios from "axios";

const markets = [
  {
    market_type: "Equity",
    region: "United States",
    primary_exchanges: "NASDAQ, NYSE, AMEX, BATS",
    local_open: "09:30",
    local_close: "16:00",
    current_status: "closed",
    notes: "",
  },
  {
    market_type: "Equity",
    region: "Canada",
    primary_exchanges: "Toronto, Toronto Ventures",
    local_open: "09:30",
    local_close: "16:00",
    current_status: "closed",
    notes: "",
  },
  {
    market_type: "Equity",
    region: "United Kingdom",
    primary_exchanges: "London",
    local_open: "08:00",
    local_close: "16:30",
    current_status: "open",
    notes: "",
  },
];

export async function getServerSideProps() {
  const api_key = "ZRPJXUN7H1K83QBY";

  const response = await axios.get(
    `https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=${api_key}`
  );

  const data = response.data.markets;

  return {
    props: {
      data,
    },
  };
}

function Dashboard({ data }) {
  console.log(data);
  return (
    <Format>
      <div className="rounded-div my-4">
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              {/* <th></th> */}
              <th>Region</th>
              <th>Market-Type</th>
              <th>Primary Exchange</th>
              <th>Local_Open</th>
              <th>Local_Close</th>
              <th>Current Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((each, index) => (
              <tr key={index} className="h-[80px] border-b overflow-hidden">
                <td>{each.region}</td>
                <td>{each.market_type}</td>
                <td>{each.primary_exchanges}</td>
                <td>{each.local_open}</td>
                <td>{each.local_close}</td>
                <td>{each.current_status}</td>
                <td>{each.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Format>
  );
}

export default Dashboard;

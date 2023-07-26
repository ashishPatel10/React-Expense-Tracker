import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            amount={expense.amount}
            date={expense.date}
            title={expense.title}
          />
        );
      })}
    </div>
  );
}
export default Expenses;

export const input = `
const styles = {}

const Test = ({text}) => (
  // position
  <div>{text}</div>
)
`

export const output = `
import { withStyles } from "@material-ui/core/styles";
const styles = {}

const testStyles = theme => ({

})

const TestWithStyles = ({
  text,
  classes
}) => (
  <div>{text}</div>
)

const Test = withStyles(testStyles)(TestWithStyles)
`

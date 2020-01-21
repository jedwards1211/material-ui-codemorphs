exports.input = `
// @flow

type Props = {
  +text: string,
}

const Test = ({text}: Props): React.Node => (
  // position
  <div>{text}</div>
)
`

exports.output = `
// @flow
import { withStyles } from "@material-ui/core/styles";

import { type Theme } from "../theme";

type Classes<Styles> = $Call<<T>((any) => T) => { [$Keys<T>]: string }, Styles>

const styles = (theme: Theme) => ({

})

type Props = {
  +text: string,
  +classes: Classes<typeof styles>,
};

const TestWithStyles = ({
  text,
  classes
}: Props): React.Node => (
  <div>{text}</div>
)

const Test = withStyles(styles)(TestWithStyles)
`
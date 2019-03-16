import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import SizedPlayer from "./SizedPlayer";

const Player = glamorous.div(
  {
    position: "relative",
    lineHeight: 0,
    display: "inline-block"
  },
  ({ autosize }) => {
    if (autosize) return { width: "100%", height: "100%" };
  }
);

export default class VideoPlayer extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    poster: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    autosize: PropTypes.bool,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    aspectRatio: PropTypes.string
  };

  static defaultProps = {
    loop: false,
    autoplay: false
  };

  state = {
    playing: this.props.autoplay,
    overlayShown: !this.props.autoplay
  };

  onPlay = () => {
    this.setState({
      playing: true,
      overlayShown: false
    });
  };

  onPause = () => {
    this.setState({
      playing: false,
      overlayShown: true
    });
  };

  onMouseOver = () => this.setState({ overlayShown: true });

  onMouseLeave = () => {
    if (!this.state.playing) {
      this.setState({ overlayShown: true });
      return;
    }

    this.setState({ overlayShown: false });
  };

  render = () => {
    const playing = this.state.playing;
    const autosize = this.props.autosize;
    return (
      <Player autosize={autosize}>
        <SizedPlayer playing={playing} {...this.props} />
      </Player>
    );
  };
}

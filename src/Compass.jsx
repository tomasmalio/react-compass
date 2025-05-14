/**
 * Compass Component
 * A simple compass component that displays a compass with a rotation arrow
 * and optional labels for direction and degree.
 * 
 * @author Tomas Malio
 * @email tomasmalio@gmail.com
 * 
 */
import './Compass.scss';

// This function converts a degree value to a compass direction
const getDirection = (deg) => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(deg / 45) % 8;
  return directions[index];
};

/**
 * Compass
 * 
 * @param {value} number - value to display the orientation of the arrow
 * @param {displayLabel} boolean - display or not the label (degree and orientation)
 * @param {width} number - width of the compass
 * @param {height} number - height of the compass
 * @param {borderColor} string - color of the border of the compass
 * @param {backgroundColor} string - color of the background of the compass
 * @param {labelColor} string - color of the label
 * @param {displayCompassLine} boolean - display or not the vertical and horizontal line
 * @param {displayCompassTick} boolean - display the lines between each direction
 * @returns Compass
 */
export const Compass = ({ value = 0, displayLabel = false, width = null, height = null, borderColor = null, backgroundColor = null, labelColor = null, displayCompassLine = true, displayCompassTick = true }) => {
  const direction = getDirection(value);

  return (
    <div className="compass"
      style={{
        ...(width != null ? { width } : {}),
        ...(height != null ? { height } : {}),
      }}
    >
      <div
        className="compass__circle"
        style={{
          ...(borderColor != null ? { borderColor } : {}),
          ...(backgroundColor != null ? { backgroundColor } : {}),
        }}

      >
        {displayCompassLine && (
          <>
            <div className="compass__line compass__line--vertical"></div>
            <div className="compass__line compass__line--horizontal"></div>
          </>
        )}

        {/* Compass ticks */}
        {displayCompassTick && (
          <div className="compass__ticks">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="compass__tick"
                style={{
                  transform: `rotate(${i * 30}deg)`
                }}
              >
                <span />
              </div>
            ))}
          </div>
        )}
        {/* Eof compass ticks */}

        {/* Circle in the midle */}
        <div className="compass__pivot" />
        {/* Compass arrows (north and south) */}
        <div
          className="compass__arrow"
          style={{ transform: `translate(-50%, -50%) rotate(${value}deg)` }}
        />
        {/* Label (degree and the direction) */}
        {displayLabel && (
          <div className="compass__label"
            style={{
              ...(labelColor != null ? { labelColor } : {}),
            }}
          >
            <div className="degree">{Math.round(value)}°</div>
            <div className="direction">{direction}</div>
          </div>
        )}
        <div className="compass__cardinals">
          <span className="N">N</span>
          <span className="S">S</span>
          <span className="E">E</span>
          <span className="W">W</span>
        </div>
      </div>
    </div>
  );
};

<?php

/**
 * Adds Linkedin_profile widget.
 */
 class Linkedin_profile_Widget extends WP_Widget {
    
        /**
         * Register widget with WordPress.
         */
        function __construct() {
            parent::__construct(
                'lkd_widget', // Base ID
                esc_html__( 'Linkedin Profile Linker', 'lkd_domain' ), // Name
                array( 'description' => esc_html__( 'Simple Widget for link Linkedin Profile to website or blog', 'lkd_domain' ), ) // Args
            );
        }
    
        /**
         * Front-end display of widget.
         *
         * @see WP_Widget::widget()
         *
         * @param array $args     Widget arguments.
         * @param array $instance Saved values from database.
         */
        public function widget( $args, $instance ) { https://www.linkedin.com/in/rajith-thennakoon-309787116
            echo $args['before_widget'];
            if ( ! empty( $instance['title'] ) ) {
                echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
            }
            echo '<script type="IN/MemberProfile" data-id="https://www.linkedin.com/in/'.$instance['username'].'" data-format="'. $instance['dataformat'] .'" data-related="'. $instance['related'].'"></script>';
            echo $args['after_widget'];
        }
    
        /**
         * Back-end widget form.
         *
         * @see WP_Widget::form()
         *
         * @param array $instance Previously saved values from database.
         */
        public function form( $instance ) {
            $title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'New title', 'lkd_domain' );
            $username = ! empty( $instance['username'] ) ? $instance['username'] : esc_html__( 'Profile Username', 'lkd_domain' );
            $dataformat = ! empty( $instance['dataformat'] ) ? $instance['dataformat'] : esc_html__( 'Data Format', 'lkd_domain' );
            $related = ! empty( $instance['related'] ) ? $instance['related'] : esc_html__( 'DataRelated', 'lkd_domain' );

            ?>
            <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_attr_e( 'Title:', 'lkd_domain' ); ?></label> 
            <input  class="widefat" 
                    id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" 
                    name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" 
                    type="text" 
                    value="<?php echo esc_attr( $title ); ?>">
            </p>

            <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'username' ) ); ?>"><?php esc_attr_e( 'Profile Username:', 'lkd_domain' ); ?></label> 
            <input  class="widefat" 
                    id="<?php echo esc_attr( $this->get_field_id( 'username' ) ); ?>" 
                    name="<?php echo esc_attr( $this->get_field_name( 'username' ) ); ?>" 
                    type="text" 
                    value="<?php echo esc_attr( $username ); ?>">
            </p>


            <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'dataformat' ) ); ?>"><?php esc_attr_e( 'Data Format:', 'lkd_domain' ); ?></label> 
            <select  class="widefat" 
                    id="<?php echo esc_attr( $this->get_field_id( 'dataformat' ) ); ?>" 
                    name="<?php echo esc_attr( $this->get_field_name( 'dataformat' ) ); ?>" 
                
            >

                <option value="inline" <?php if($dataformat=='inline'){

                                            echo 'selected';
                                        }else{
                                            echo '';
                                        }

                

                
                ?> >Inline</option>

                <option value="hover"  <?php if($dataformat=='hover'){

                                            echo 'selected';
                                        }else{
                                            echo '';
                                        }

                
                ?>>Icon</option>


            </select>
            </p>



            <p>
            <label for="<?php echo esc_attr( $this->get_field_id( 'related' ) ); ?>"><?php esc_attr_e( 'Data Related:', 'lkd_domain' ); ?></label> 
            <select  class="widefat" 
                    id="<?php echo esc_attr( $this->get_field_id( 'related' ) ); ?>" 
                    name="<?php echo esc_attr( $this->get_field_name( 'related' ) ); ?>" 
                
            >

                <option value="true" <?php if($related=='true'){

                                            echo 'selected';
                                        }else{
                                            echo '';
                                        }

                

                
                ?> >true</option>

                <option value="false"  <?php if($related=='false'){

                                            echo 'selected';
                                        }else{
                                            echo '';
                                        }

                
                ?>>false</option>


            </select>
            </p>

            <?php 
        }
    
        /**
         * Sanitize widget form values as they are saved.
         *
         * @see WP_Widget::update()
         *
         * @param array $new_instance Values just sent to be saved.
         * @param array $old_instance Previously saved values from database.
         *
         * @return array Updated safe values to be saved.
         */
        public function update( $new_instance, $old_instance ) {
            $instance = array();
            $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
            $instance['username'] = ( ! empty( $new_instance['username'] ) ) ? strip_tags( $new_instance['username'] ) : '';
            $instance['dataformat'] = ( ! empty( $new_instance['dataformat'] ) ) ? strip_tags( $new_instance['dataformat'] ) : '';
            $instance['related'] = ( ! empty( $new_instance['related'] ) ) ? strip_tags( $new_instance['related'] ) : '';
    
            return $instance;
        }
    
    } // class Foo_Widget
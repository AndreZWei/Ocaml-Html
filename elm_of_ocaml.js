
// Generated by js_of_ocaml 2.7
(function(joo_global_object_J_)
   {"use strict";
    var
     num_224_ag_=224,
     str_Sys_error_am_="Sys_error",
     str_Invalid_argument_av_="Invalid_argument",
     num_1024_n_=1024,
     num_57343_al_=57343,
     str_ak_="'",
     str_int_of_string_s_="int_of_string",
     num_512_au_=512,
     str_End_of_file_at_="End_of_file",
     str_elm_lang_core_N_abr_ar_="_elm_lang$core$Native_Platform.batch",
     str_Failure_as_="Failure",
     str_Undefined_recurs_abr_ab_="Undefined_recursive_module",
     str_Stack_overflow_af_="Stack_overflow",
     str_d_="",
     num_128_f_=128,
     num_56320_aa_=56320,
     str_file_already_abr_E_=" : file already exists",
     num_240_ai_=240,
     num_2048_aj_=2048,
     num_248_a_=248,
     str_Not_found_ae_="Not_found",
     str_Assert_failure___="Assert_failure",
     str_$_="/",
     str_Sys_blocked_io_ap_="Sys_blocked_io",
     str_fd_aq_="fd ",
     str_Out_of_memory_ah_="Out_of_memory",
     str_target_ao_="target",
     str_Match_failure_ad_="Match_failure",
     str_Division_by_zero_an_="Division_by_zero",
     num_1e3_ac_=1e3;
    function raw_array_sub_K_(a_a_,i_b_,l_c_)
     {var b_e_=new Array(l_c_);
      for(var j_d_=0;j_d_<l_c_;j_d_++)b_e_[j_d_]=a_a_[i_b_+j_d_];
      return b_e_}
    function caml_subarray_to_string_I_(a_a_,i_b_,len_c_)
     {var f_e_=String.fromCharCode;
      if(i_b_==0&&len_c_<=4096&&len_c_==a_a_.length)
       return f_e_.apply(null,a_a_);
      var s_f_=str_d_;
      for(;0<len_c_;i_b_+=num_1024_n_,len_c_-=num_1024_n_)
       s_f_+=
       f_e_.apply
        (null,raw_array_sub_K_(a_a_,i_b_,Math.min(len_c_,num_1024_n_)));
      return s_f_}
    function caml_convert_string_to_array_aw_(s_a_)
     {var a_c_=new Array(s_a_.l),b_e_=s_a_.c,l_d_=b_e_.length,i_b_=0;
      for(;i_b_<l_d_;i_b_++)a_c_[i_b_]=b_e_.charCodeAt(i_b_);
      for(l_d_=s_a_.l;i_b_<l_d_;i_b_++)a_c_[i_b_]=0;
      s_a_.c=a_c_;
      s_a_.t=4;
      return a_c_}
    function caml_blit_string_t_(s1_a_,i1_b_,s2_c_,i2_d_,len_e_)
     {if(len_e_==0)return 0;
      if(i2_d_==0&&(len_e_>=s2_c_.l||s2_c_.t==2&&len_e_>=s2_c_.c.length))
       {s2_c_.c=
        s1_a_.t==4
         ?caml_subarray_to_string_I_(s1_a_.c,i1_b_,len_e_)
         :i1_b_==0&&s1_a_.c.length==len_e_
           ?s1_a_.c
           :s1_a_.c.substr(i1_b_,len_e_);
        s2_c_.t=s2_c_.c.length==s2_c_.l?0:2}
      else
       if(s2_c_.t==2&&i2_d_==s2_c_.c.length)
        {s2_c_.c+=
         s1_a_.t==4
          ?caml_subarray_to_string_I_(s1_a_.c,i1_b_,len_e_)
          :i1_b_==0&&s1_a_.c.length==len_e_
            ?s1_a_.c
            :s1_a_.c.substr(i1_b_,len_e_);
         s2_c_.t=s2_c_.c.length==s2_c_.l?0:2}
       else
        {if(s2_c_.t!=4)caml_convert_string_to_array_aw_(s2_c_);
         var c1_g_=s1_a_.c,c2_h_=s2_c_.c;
         if(s1_a_.t==4)
          for(var i_f_=0;i_f_<len_e_;i_f_++)
           c2_h_[i2_d_+i_f_]=c1_g_[i1_b_+i_f_];
         else
          {var l_i_=Math.min(len_e_,c1_g_.length-i1_b_);
           for(var i_f_=0;i_f_<l_i_;i_f_++)
            c2_h_[i2_d_+i_f_]=c1_g_.charCodeAt(i1_b_+i_f_);
           for(;i_f_<len_e_;i_f_++)c2_h_[i2_d_+i_f_]=0}}
      return 0}
    function raw_array_append_one_bG_(a_a_,x_b_)
     {var l_e_=a_a_.length,b_d_=new Array(l_e_+1),i_c_=0;
      for(;i_c_<l_e_;i_c_++)b_d_[i_c_]=a_a_[i_c_];
      b_d_[i_c_]=x_b_;
      return b_d_}
    function caml_call_gen_u_(f_c_,args_b_)
     {if(f_c_.fun)return caml_call_gen_u_(f_c_.fun,args_b_);
      var n_a_=f_c_.length,argsLen_d_=args_b_.length,d_e_=n_a_-argsLen_d_;
      if(d_e_==0)
       return f_c_.apply(null,args_b_);
      else
       if(d_e_<0)
        return caml_call_gen_u_
                (f_c_.apply(null,raw_array_sub_K_(args_b_,0,n_a_)),
                 raw_array_sub_K_(args_b_,n_a_,argsLen_d_-n_a_));
       else
        return function(x_a_)
         {return caml_call_gen_u_(f_c_,raw_array_append_one_bG_(args_b_,x_a_))}}
    function caml_str_repeat_by_(n_a_,s_b_)
     {if(s_b_.repeat)return s_b_.repeat(n_a_);
      var r_c_=str_d_,l_e_=0;
      if(n_a_==0)return r_c_;
      for(;;)
       {if(n_a_&1)r_c_+=s_b_;
        n_a_>>=1;
        if(n_a_==0)return r_c_;
        s_b_+=s_b_;
        l_e_++;
        if(l_e_==9)s_b_.slice(0,1)}}
    function caml_convert_string_to_bytes_ax_(s_a_)
     {if(s_a_.t==2)
       s_a_.c+=caml_str_repeat_by_(s_a_.l-s_a_.c.length,"\0");
      else
       s_a_.c=caml_subarray_to_string_I_(s_a_.c,0,s_a_.c.length);
      s_a_.t=0}
    function caml_is_ascii_az_(s_a_)
     {if(s_a_.length<24)
       {for(var i_b_=0;i_b_<s_a_.length;i_b_++)
         if(s_a_.charCodeAt(i_b_)>127)return false;
        return true}
      else
       return !/[^\x00-\x7f]/.test(s_a_)}
    function caml_utf16_of_utf8_bD_(s_a_)
     {for
       (var
         b_l_=str_d_,
         t_e_=str_d_,
         c_i_,
         c1_h_,
         c2_j_,
         v_b_,
         i_c_=0,
         l_k_=s_a_.length;
        i_c_<
        l_k_;
        i_c_++)
       {c1_h_=s_a_.charCodeAt(i_c_);
        if(c1_h_<num_128_f_)
         {for
           (var j_g_=i_c_+1;
            j_g_<
            l_k_&&
            (c1_h_=s_a_.charCodeAt(j_g_))<
            num_128_f_;
            j_g_++)
           ;
          if(j_g_-i_c_>num_512_au_)
           {t_e_.substr(0,1);
            b_l_+=t_e_;
            t_e_=str_d_;
            b_l_+=s_a_.slice(i_c_,j_g_)}
          else
           t_e_+=s_a_.slice(i_c_,j_g_);
          if(j_g_==l_k_)break;
          i_c_=j_g_}
        v_b_=1;
        if(++i_c_<l_k_&&((c2_j_=s_a_.charCodeAt(i_c_))&-64)==num_128_f_)
         {c_i_=c2_j_+(c1_h_<<6);
          if(c1_h_<num_224_ag_)
           {v_b_=c_i_-12416;if(v_b_<num_128_f_)v_b_=1}
          else
           {v_b_=2;
            if(++i_c_<l_k_&&((c2_j_=s_a_.charCodeAt(i_c_))&-64)==num_128_f_)
             {c_i_=c2_j_+(c_i_<<6);
              if(c1_h_<num_240_ai_)
               {v_b_=c_i_-925824;
                if(v_b_<num_2048_aj_||v_b_>=55295&&v_b_<57344)v_b_=2}
              else
               {v_b_=3;
                if
                 (++i_c_<
                  l_k_&&
                  ((c2_j_=s_a_.charCodeAt(i_c_))&-64)==
                  num_128_f_&&
                  c1_h_<
                  245)
                 {v_b_=c2_j_-63447168+(c_i_<<6);
                  if(v_b_<65536||v_b_>1114111)v_b_=3}}}}}
        if(v_b_<4)
         {i_c_-=v_b_;t_e_+="\ufffd"}
        else
         if(v_b_>65535)
          t_e_+=
          String.fromCharCode(55232+(v_b_>>10),num_56320_aa_+(v_b_&1023));
         else
          t_e_+=String.fromCharCode(v_b_);
        if(t_e_.length>num_1024_n_){t_e_.substr(0,1);b_l_+=t_e_;t_e_=str_d_}}
      return b_l_+t_e_}
    function caml_to_js_string_bC_(s_a_)
     {switch(s_a_.t)
       {case 9:return s_a_.c;
        default:caml_convert_string_to_bytes_ax_(s_a_);case 0:
         if(caml_is_ascii_az_(s_a_.c)){s_a_.t=9;return s_a_.c}s_a_.t=8;
        case 8:return caml_utf16_of_utf8_bD_(s_a_.c)
        }}
    function MlString_h_(tag_a_,contents_b_,length_c_)
     {this.t=tag_a_;this.c=contents_b_;this.l=length_c_}
    MlString_h_.prototype.toString=
    function(){return caml_to_js_string_bC_(this)};
    function caml_raise_with_arg_bv_(tag_a_,arg_b_){throw [0,tag_a_,arg_b_]}
    function caml_new_string_c_(s_a_)
     {return new MlString_h_(0,s_a_,s_a_.length)}
    function caml_raise_with_string_H_(tag_a_,msg_b_)
     {caml_raise_with_arg_bv_(tag_a_,caml_new_string_c_(msg_b_))}
    var caml_global_data_e_=[0];
    function caml_invalid_argument_ay_(msg_a_)
     {caml_raise_with_string_H_(caml_global_data_e_.Invalid_argument,msg_a_)}
    function caml_create_string_k_(len_a_)
     {if(len_a_<0)caml_invalid_argument_ay_("String.create");
      return new MlString_h_(len_a_?2:9,str_d_,len_a_)}
    var caml_oo_last_id_bt_=0;
    function caml_fresh_oo_id_o_(){return caml_oo_last_id_bt_++}
    function caml_string_unsafe_get_p_(s_a_,i_b_)
     {switch(s_a_.t&6)
       {default:if(i_b_>=s_a_.c.length)return 0;case 0:return s_a_.c.charCodeAt(i_b_);
        case 4:return s_a_.c[i_b_]
        }}
    function caml_ml_string_length_l_(s_a_){return s_a_.l}
    function caml_parse_sign_and_base_bu_(s_a_)
     {var
       i_b_=0,
       len_d_=caml_ml_string_length_l_(s_a_),
       base_c_=10,
       sign_e_=len_d_>0&&caml_string_unsafe_get_p_(s_a_,0)==45?(i_b_++,-1):1;
      if(i_b_+1<len_d_&&caml_string_unsafe_get_p_(s_a_,i_b_)==48)
       switch(caml_string_unsafe_get_p_(s_a_,i_b_+1))
        {case 120:
         case 88:base_c_=16;i_b_+=2;break;
         case 111:
         case 79:base_c_=8;i_b_+=2;break;
         case 98:
         case 66:base_c_=2;i_b_+=2;break
         }
      return [i_b_,sign_e_,base_c_]}
    function caml_parse_digit_aB_(c_a_)
     {if(c_a_>=48&&c_a_<=57)return c_a_-48;
      if(c_a_>=65&&c_a_<=90)return c_a_-55;
      if(c_a_>=97&&c_a_<=122)return c_a_-87;
      return -1}
    function caml_failwith_v_(msg_a_)
     {caml_raise_with_string_H_(caml_global_data_e_.Failure,msg_a_)}
    function caml_int_of_string_bn_(s_a_)
     {var
       r_h_=caml_parse_sign_and_base_bu_(s_a_),
       i_d_=r_h_[0],
       sign_i_=r_h_[1],
       base_e_=r_h_[2],
       len_g_=caml_ml_string_length_l_(s_a_),
       threshold_j_=-1>>>0,
       c_f_=i_d_<len_g_?caml_string_unsafe_get_p_(s_a_,i_d_):0,
       d_c_=caml_parse_digit_aB_(c_f_);
      if(d_c_<0||d_c_>=base_e_)caml_failwith_v_(str_int_of_string_s_);
      var res_b_=d_c_;
      for(i_d_++;i_d_<len_g_;i_d_++)
       {c_f_=caml_string_unsafe_get_p_(s_a_,i_d_);
        if(c_f_==95)continue;
        d_c_=caml_parse_digit_aB_(c_f_);
        if(d_c_<0||d_c_>=base_e_)break;
        res_b_=base_e_*res_b_+d_c_;
        if(res_b_>threshold_j_)caml_failwith_v_(str_int_of_string_s_)}
      if(i_d_!=len_g_)caml_failwith_v_(str_int_of_string_s_);
      res_b_=sign_i_*res_b_;
      if(base_e_==10&&(res_b_|0)!=res_b_)
       caml_failwith_v_(str_int_of_string_s_);
      return res_b_|0}
    function js_print_stderr_aE_(s_a_)
     {if(s_a_.charCodeAt(s_a_.length-1)==10)s_a_=s_a_.substr(0,s_a_.length-1);
      var v_b_=joo_global_object_J_.console;
      v_b_&&v_b_.error&&v_b_.error(s_a_)}
    function caml_js_expr_w_(s_a_)
     {js_print_stderr_aE_("caml_js_expr: fallback to runtime evaluation");
      return eval(s_a_.toString())}
    function caml_utf8_of_utf16_bE_(s_a_)
     {for
       (var b_h_=str_d_,t_c_=b_h_,c_b_,d_j_,i_e_=0,l_i_=s_a_.length;
        i_e_<
        l_i_;
        i_e_++)
       {c_b_=s_a_.charCodeAt(i_e_);
        if(c_b_<num_128_f_)
         {for
           (var j_g_=i_e_+1;
            j_g_<
            l_i_&&
            (c_b_=s_a_.charCodeAt(j_g_))<
            num_128_f_;
            j_g_++)
           ;
          if(j_g_-i_e_>num_512_au_)
           {t_c_.substr(0,1);
            b_h_+=t_c_;
            t_c_=str_d_;
            b_h_+=s_a_.slice(i_e_,j_g_)}
          else
           t_c_+=s_a_.slice(i_e_,j_g_);
          if(j_g_==l_i_)break;
          i_e_=j_g_}
        if(c_b_<num_2048_aj_)
         {t_c_+=String.fromCharCode(192|c_b_>>6);
          t_c_+=String.fromCharCode(num_128_f_|c_b_&63)}
        else
         if(c_b_<55296||c_b_>=num_57343_al_)
          t_c_+=
          String.fromCharCode
           (num_224_ag_|c_b_>>12,num_128_f_|c_b_>>6&63,num_128_f_|c_b_&63);
         else
          if
           (c_b_>=
            56319||
            i_e_+
            1==
            l_i_||
            (d_j_=s_a_.charCodeAt(i_e_+1))<
            num_56320_aa_||
            d_j_>
            num_57343_al_)
           t_c_+="\xef\xbf\xbd";
          else
           {i_e_++;
            c_b_=(c_b_<<10)+d_j_-56613888;
            t_c_+=
            String.fromCharCode
             (num_240_ai_|c_b_>>18,
              num_128_f_|c_b_>>12&63,
              num_128_f_|c_b_>>6&63,
              num_128_f_|c_b_&63)}
        if(t_c_.length>num_1024_n_){t_c_.substr(0,1);b_h_+=t_c_;t_c_=str_d_}}
      return b_h_+t_c_}
    function caml_js_to_string_G_(s_a_)
     {var tag_b_=9;
      if(!caml_is_ascii_az_(s_a_))tag_b_=8,s_a_=caml_utf8_of_utf16_bE_(s_a_);
      return new MlString_h_(tag_b_,s_a_,s_a_.length)}
    function caml_raise_sys_error_g_(msg_a_)
     {caml_raise_with_string_H_(caml_global_data_e_.Sys_error,msg_a_)}
    function caml_ml_flush_bo_(oc_a_)
     {if(!oc_a_.opened)
       caml_raise_sys_error_g_("Cannot flush a closed channel");
      if(oc_a_.buffer==str_d_)return 0;
      if(oc_a_.output)
       switch(oc_a_.output.length)
        {case 2:oc_a_.output(oc_a_,oc_a_.buffer);break;
         default:oc_a_.output(oc_a_.buffer)}
      oc_a_.buffer=str_d_;
      return 0}
    var file_inode_aD_=0;
    function unix_gettimeofday_bH_(){return new Date().getTime()/num_1e3_ac_}
    function unix_time_L_(){return Math.floor(unix_gettimeofday_bH_())}
    function MlFile_i_(content_a_)
     {this.data=content_a_;
      this.inode=file_inode_aD_++;
      var now_b_=unix_time_L_();
      this.atime=now_b_;
      this.mtime=now_b_;
      this.ctime=now_b_}
    MlFile_i_.prototype=
    {truncate:function(){this.data=caml_create_string_k_(0);this.modified()},
     modified:
     function(){var now_a_=unix_time_L_();this.atime=now_a_;this.mtime=now_a_}};
    function caml_raise_no_such_file_aC_(name_a_)
     {name_a_=name_a_ instanceof MlString_h_?name_a_.toString():name_a_;
      caml_raise_sys_error_g_(name_a_+": No such file or directory")}
    var caml_current_dir_bl_=str_$_;
    function caml_make_path_x_(name_a_)
     {name_a_=name_a_ instanceof MlString_h_?name_a_.toString():name_a_;
      if(name_a_.charCodeAt(0)!=47)name_a_=caml_current_dir_bl_+name_a_;
      var comp_e_=name_a_.split(str_$_),ncomp_b_=[];
      for(var i_c_=0;i_c_<comp_e_.length;i_c_++)
       switch(comp_e_[i_c_])
        {case "..":if(ncomp_b_.length>1)ncomp_b_.pop();break;
         case ".":break;
         case "":if(ncomp_b_.length==0)ncomp_b_.push(str_d_);break;
         default:ncomp_b_.push(comp_e_[i_c_]);break}
      ncomp_b_.orig=name_a_;
      return ncomp_b_}
    function MlDir_j_()
     {this.content={};
      this.inode=file_inode_aD_++;
      var now_a_=unix_time_L_();
      this.atime=now_a_;
      this.mtime=now_a_;
      this.ctime=now_a_}
    MlDir_j_.prototype=
    {exists:function(name_a_){return this.content[name_a_]?1:0},
     mk:function(name_a_,c_b_){this.content[name_a_]=c_b_},
     get:function(name_a_){return this.content[name_a_]},
     list:
     function()
      {var a_a_=[];for(var n_b_ in this.content)a_a_.push(n_b_);return a_a_},
     remove:function(name_a_){delete this.content[name_a_]}};
    var caml_root_dir_z_=new MlDir_j_();
    caml_root_dir_z_.mk(str_d_,new MlDir_j_());
    function caml_fs_content_F_(path_a_)
     {var dir_b_=caml_root_dir_z_;
      for(var i_c_=0;i_c_<path_a_.length;i_c_++)
       {if(!(dir_b_.exists&&dir_b_.exists(path_a_[i_c_])))
         caml_raise_no_such_file_aC_(path_a_.orig);
        dir_b_=dir_b_.get(path_a_[i_c_])}
      return dir_b_}
    function caml_sys_is_directory_bB_(name_a_)
     {var
       path_c_=caml_make_path_x_(name_a_),
       dir_b_=caml_fs_content_F_(path_c_);
      return dir_b_ instanceof MlDir_j_?1:0}
    function caml_string_of_array_bz_(a_a_)
     {return new MlString_h_(4,a_a_,a_a_.length)}
    function caml_array_of_string_bI_(s_a_)
     {if(s_a_.t!=4)caml_convert_string_to_array_aw_(s_a_);return s_a_.c}
    function caml_fs_register_bm_(name_a_,content_b_)
     {var path_f_=caml_make_path_x_(name_a_),dir_d_=caml_root_dir_z_;
      for(var i_k_=0;i_k_<path_f_.length-1;i_k_++)
       {var d_e_=path_f_[i_k_];
        if(!dir_d_.exists(d_e_))dir_d_.mk(d_e_,new MlDir_j_());
        dir_d_=dir_d_.get(d_e_);
        if(!(dir_d_ instanceof MlDir_j_))
         caml_raise_sys_error_g_(path_f_.orig+str_file_already_abr_E_)}
      var d_e_=path_f_[path_f_.length-1];
      if(dir_d_.exists(d_e_))
       caml_raise_sys_error_g_(path_f_.orig+str_file_already_abr_E_);
      if(content_b_ instanceof MlDir_j_)
       dir_d_.mk(d_e_,content_b_);
      else
       if(content_b_ instanceof MlFile_i_)
        dir_d_.mk(d_e_,content_b_);
       else
        if(content_b_ instanceof MlString_h_)
         dir_d_.mk(d_e_,new MlFile_i_(content_b_));
        else
         if(content_b_ instanceof Array)
          dir_d_.mk(d_e_,new MlFile_i_(caml_string_of_array_bz_(content_b_)));
         else
          if(content_b_.toString)
           dir_d_.mk
            (d_e_,new MlFile_i_(caml_new_string_c_(content_b_.toString())));
          else
           caml_invalid_argument_ay_("caml_fs_register");
      return 0}
    function caml_sys_file_exists_bA_(name_a_)
     {var
       dir_b_=caml_root_dir_z_,
       path_d_=caml_make_path_x_(name_a_),
       auto_load_e_,
       pos_f_;
      for(var i_c_=0;i_c_<path_d_.length;i_c_++)
       {if(dir_b_.auto){auto_load_e_=dir_b_.auto;pos_f_=i_c_}
        if(!(dir_b_.exists&&dir_b_.exists(path_d_[i_c_])))
         return auto_load_e_?auto_load_e_(path_d_,pos_f_):0;
        dir_b_=dir_b_.get(path_d_[i_c_])}
      return 1}
    function caml_sys_open_internal_q_(idx_a_,file_b_,flags_c_)
     {if(caml_global_data_e_.fds===undefined)
       caml_global_data_e_.fds=new Array();
      flags_c_=flags_c_?flags_c_:{};
      var info_d_={};
      info_d_.file=file_b_;
      info_d_.offset=flags_c_.append?caml_ml_string_length_l_(file_b_.data):0;
      info_d_.flags=flags_c_;
      caml_global_data_e_.fds[idx_a_]=info_d_;
      caml_global_data_e_.fd_last_idx=idx_a_;
      return idx_a_}
    function caml_sys_open_bJ_(name_a_,flags_b_,perms_c_)
     {var f_d_={};
      while(flags_b_)
       {switch(flags_b_[1])
         {case 0:f_d_.rdonly=1;break;
          case 1:f_d_.wronly=1;break;
          case 2:f_d_.append=1;break;
          case 3:f_d_.create=1;break;
          case 4:f_d_.truncate=1;break;
          case 5:f_d_.excl=1;break;
          case 6:f_d_.binary=1;break;
          case 7:f_d_.text=1;break;
          case 8:f_d_.nonblock=1;break
          }
        flags_b_=flags_b_[2]}
      var name2_h_=name_a_.toString(),path_j_=caml_make_path_x_(name_a_);
      if(f_d_.rdonly&&f_d_.wronly)
       caml_raise_sys_error_g_
        (name2_h_+" : flags Open_rdonly and Open_wronly are not compatible");
      if(f_d_.text&&f_d_.binary)
       caml_raise_sys_error_g_
        (name2_h_+" : flags Open_text and Open_binary are not compatible");
      if(caml_sys_file_exists_bA_(name_a_))
       {if(caml_sys_is_directory_bB_(name_a_))
         caml_raise_sys_error_g_(name2_h_+" : is a directory");
        if(f_d_.create&&f_d_.excl)
         caml_raise_sys_error_g_(name2_h_+str_file_already_abr_E_);
        var
         idx_i_=
          caml_global_data_e_.fd_last_idx?caml_global_data_e_.fd_last_idx:0,
         file_f_=caml_fs_content_F_(path_j_);
        if(f_d_.truncate)file_f_.truncate();
        return caml_sys_open_internal_q_(idx_i_+1,file_f_,f_d_)}
      else
       if(f_d_.create)
        {var
          idx_i_=
           caml_global_data_e_.fd_last_idx?caml_global_data_e_.fd_last_idx:0;
         caml_fs_register_bm_(name_a_,caml_create_string_k_(0));
         var file_f_=caml_fs_content_F_(path_j_);
         return caml_sys_open_internal_q_(idx_i_+1,file_f_,f_d_)}
       else
        caml_raise_no_such_file_aC_(name_a_)}
    caml_sys_open_internal_q_(0,new MlFile_i_(caml_create_string_k_(0)));
    caml_sys_open_internal_q_(1,new MlFile_i_(caml_create_string_k_(0)));
    caml_sys_open_internal_q_(2,new MlFile_i_(caml_create_string_k_(0)));
    function caml_ml_open_descriptor_in_bp_(fd_a_)
     {var data_b_=caml_global_data_e_.fds[fd_a_];
      if(data_b_.flags.wronly)
       caml_raise_sys_error_g_(str_fd_aq_+fd_a_+" is writeonly");
      return {file:data_b_.file,
              offset:data_b_.offset,
              fd:fd_a_,
              opened:true,
              refill:null}}
    function js_print_stdout_bF_(s_a_)
     {if(s_a_.charCodeAt(s_a_.length-1)==10)s_a_=s_a_.substr(0,s_a_.length-1);
      var v_b_=joo_global_object_J_.console;
      v_b_&&v_b_.log&&v_b_.log(s_a_)}
    var caml_ml_out_channels_y_=new Array();
    function caml_std_output_bx_(chan_a_,s_b_)
     {var
       str_h_=caml_new_string_c_(s_b_),
       slen_d_=caml_ml_string_length_l_(str_h_),
       clen_g_=caml_ml_string_length_l_(chan_a_.file.data),
       offset_f_=chan_a_.offset;
      if(offset_f_+slen_d_>=clen_g_)
       {var new_str_e_=caml_create_string_k_(offset_f_+slen_d_);
        caml_blit_string_t_(chan_a_.file.data,0,new_str_e_,0,clen_g_);
        caml_blit_string_t_(str_h_,0,new_str_e_,offset_f_,slen_d_);
        chan_a_.file.data=new_str_e_}
      chan_a_.offset+=slen_d_;
      chan_a_.file.modified();
      return 0}
    function caml_ml_open_descriptor_out_aA_(fd_a_)
     {var output_b_;
      switch(fd_a_)
       {case 1:output_b_=js_print_stdout_bF_;break;
        case 2:output_b_=js_print_stderr_aE_;break;
        default:output_b_=caml_std_output_bx_}
      var data_f_=caml_global_data_e_.fds[fd_a_];
      if(data_f_.flags.rdonly)
       caml_raise_sys_error_g_(str_fd_aq_+fd_a_+" is readonly");
      var
       channel_c_=
        {file:data_f_.file,
         offset:data_f_.offset,
         fd:fd_a_,
         opened:true,
         buffer:str_d_,
         output:output_b_};
      caml_ml_out_channels_y_[channel_c_.fd]=channel_c_;
      return channel_c_}
    function caml_ml_out_channels_list_bq_()
     {var l_a_=0;
      for(var c_b_ in caml_ml_out_channels_y_)
       if(caml_ml_out_channels_y_[c_b_].opened)
        l_a_=[0,caml_ml_out_channels_y_[c_b_],l_a_];
      return l_a_}
    function caml_obj_tag_bs_(x_a_)
     {return x_a_ instanceof Array
              ?x_a_[0]
              :x_a_ instanceof MlString_h_?252:num_1e3_ac_}
    function caml_register_global_b_(n_a_,v_b_,name_opt_c_)
     {caml_global_data_e_[n_a_+1]=v_b_;
      if(name_opt_c_)caml_global_data_e_[name_opt_c_]=v_b_}
    var caml_named_values_br_={};
    function caml_bytes_of_string_bk_(s_a_)
     {if((s_a_.t&6)!=0)caml_convert_string_to_bytes_ax_(s_a_);return s_a_.c}
    function caml_register_named_value_bw_(nm_a_,v_b_)
     {caml_named_values_br_[caml_bytes_of_string_bk_(nm_a_)]=v_b_;return 0}
    function caml_call_gen2_bj_(fun_a_,var0_b_,var1_c_)
     {return fun_a_.length==2
              ?fun_a_(var0_b_,var1_c_)
              :caml_call_gen_u_(fun_a_,[var0_b_,var1_c_])}
    caml_register_global_b_
     (11,
      [num_248_a_,caml_new_string_c_(str_Undefined_recurs_abr_ab_),-12],
      str_Undefined_recurs_abr_ab_);
    caml_register_global_b_
     (10,
      [num_248_a_,caml_new_string_c_(str_Assert_failure___),-11],
      str_Assert_failure___);
    caml_register_global_b_
     (9,
      [num_248_a_,caml_new_string_c_(str_Sys_blocked_io_ap_),-10],
      str_Sys_blocked_io_ap_);
    caml_register_global_b_
     (8,
      [num_248_a_,caml_new_string_c_(str_Stack_overflow_af_),-9],
      str_Stack_overflow_af_);
    caml_register_global_b_
     (7,
      [num_248_a_,caml_new_string_c_(str_Match_failure_ad_),-8],
      str_Match_failure_ad_);
    caml_register_global_b_
     (6,
      [num_248_a_,caml_new_string_c_(str_Not_found_ae_),-7],
      str_Not_found_ae_);
    caml_register_global_b_
     (5,
      [num_248_a_,caml_new_string_c_(str_Division_by_zero_an_),-6],
      str_Division_by_zero_an_);
    caml_register_global_b_
     (4,
      [num_248_a_,caml_new_string_c_(str_End_of_file_at_),-5],
      str_End_of_file_at_);
    caml_register_global_b_
     (3,
      [num_248_a_,caml_new_string_c_(str_Invalid_argument_av_),-4],
      str_Invalid_argument_av_);
    caml_register_global_b_
     (2,[num_248_a_,caml_new_string_c_(str_Failure_as_),-3],str_Failure_as_);
    caml_register_global_b_
     (1,
      [num_248_a_,caml_new_string_c_(str_Sys_error_am_),-2],
      str_Sys_error_am_);
    caml_register_global_b_
     (0,
      [num_248_a_,caml_new_string_c_(str_Out_of_memory_ah_),-1],
      str_Out_of_memory_ah_);
    caml_fresh_oo_id_o_(0);
    var
     _aI_=caml_new_string_c_("Js.Error"),
     _aK_=caml_new_string_c_(str_elm_lang_core_N_abr_ar_),
     _aJ_=caml_new_string_c_(str_elm_lang_core_N_abr_ar_),
     _aW_=caml_new_string_c_("_elm_lang$core$Native_Json.succeed"),
     _aV_=caml_new_string_c_("_elm_lang$core$Native_Json.decodeField"),
     _aN_=caml_new_string_c_("_elm_lang$core$Native_Json.decodeObject1"),
     _aM_=caml_new_string_c_("_elm_lang$core$Native_Json.decodePrimitive"),
     _aO_=caml_new_string_c_("string"),
     _aQ_=caml_new_string_c_("int"),
     _aS_=caml_new_string_c_("float"),
     _aT_=caml_new_string_c_("bool"),
     _aX_=caml_new_string_c_(str_ak_),
     _aY_=caml_new_string_c_(str_ak_),
     _a4_=
      caml_new_string_c_
       ("_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags"),
     _a3_=caml_new_string_c_("_elm_lang$virtual_dom$Native_VirtualDom.on"),
     _a1_=
      caml_new_string_c_("_elm_lang$virtual_dom$Native_VirtualDom.property"),
     _a0_=caml_new_string_c_("_elm_lang$virtual_dom$Native_VirtualDom.node"),
     _aZ_=caml_new_string_c_("_elm_lang$virtual_dom$Native_VirtualDom.text"),
     _a2_=[0,0,0],
     _bd_=caml_new_string_c_("input"),
     _bc_=caml_new_string_c_("click"),
     _a7_=caml_new_string_c_("button"),
     _a6_=caml_new_string_c_("textarea"),
     _a5_=caml_new_string_c_("div"),
     _a__=
      [0,caml_new_string_c_(str_target_ao_),[0,caml_new_string_c_("value"),0]],
     _ba_=
      [0,
       caml_new_string_c_(str_target_ao_),
       [0,caml_new_string_c_("checked"),0]],
     _bb_=caml_new_string_c_("keyCode"),
     _bg_=caml_new_string_c_("+"),
     _bh_=caml_new_string_c_("-"),
     _bi_=caml_new_string_c_("body");
    function _M_(_a_,_b_)
     {var
       _c_=caml_ml_string_length_l_(_a_),
       _e_=caml_ml_string_length_l_(_b_),
       _d_=caml_create_string_k_(_c_+_e_|0);
      caml_blit_string_t_(_a_,0,_d_,0,_c_);
      caml_blit_string_t_(_b_,0,_d_,_c_,_e_);
      return _d_}
    caml_ml_open_descriptor_in_bp_(0);
    caml_ml_open_descriptor_out_aA_(1);
    caml_ml_open_descriptor_out_aA_(2);
    function _N_(_a_,_b_,_c_)
     {if(_b_)
       {var _d_=_b_[1];return caml_call_gen2_bj_(_a_,_d_,_N_(_a_,_b_[2],_c_))}
      return _c_}
    caml_fresh_oo_id_o_(0);
    caml_fresh_oo_id_o_(0);
    caml_fresh_oo_id_o_(0);
    var _O_=[0,0];
    function _P_(_a_){_O_[1]=[0,_a_,_O_[1]];return 0}
    var
     _aH_=joo_global_object_J_.Array,
     _Q_=[num_248_a_,_aI_,caml_fresh_oo_id_o_(0)],
     _A_=[0,_Q_,{}],
     _aG_=caml_obj_tag_bs_(_A_)===num_248_a_?_A_:_A_[1];
    caml_register_named_value_bw_(caml_new_string_c_("jsError"),_aG_);
    _P_
     (function(_a_)
       {return _a_[1]===_Q_?[0,caml_js_to_string_G_(_a_[2].toString())]:0});
    _P_
     (function(_a_)
       {return _a_ instanceof _aH_?0:[0,caml_js_to_string_G_(_a_.toString())]});
    function _m_(_a_,_b_){return caml_js_expr_w_(_a_)(_b_)}
    function _B_(_a_,_b_,_c_){return A2(caml_js_expr_w_(_a_),_b_,_c_)}
    function _R_(_a_,_b_,_c_,_d_){return A3(caml_js_expr_w_(_a_),_b_,_c_,_d_)}
    var _S_=_m_(_aJ_,[0]),_aL_=_m_(_aK_,[0]);
    function _r_(_a_){return _m_(_aM_,_a_.toString())}
    var _aP_=_r_(_aO_),_aR_=_r_(_aQ_);
    _r_(_aS_);
    var _aU_=_r_(_aT_);
    function _T_(_a_,_b_){return _B_(_aV_,_a_.toString(),_b_)}
    function _U_(_a_,_b_){return _N_(_T_,_a_,_b_)}
    function _C_(_a_){return _m_(_aZ_,_a_)}
    function _D_(_a_,_b_,_c_){return _R_(_a0_,_a_.toString(),_b_,_c_)}
    function _V_(_a_,_b_){return _D_(_a5_,_a_,_b_)}
    function _W_(_a_,_b_){return _D_(_a7_,_a_,_b_)}
    function _X_(_a_,_b_){return _R_(_a3_,_a_.toString(),_a2_,_b_)}
    var _a$_=_U_(_a__,_aP_);
    _U_(_ba_,_aU_);
    _T_(_bb_,_aR_);
    function _Y_(_a_){return _X_(_bc_,_m_(_aW_,_a_))}
    var _Z_={},_be_=2;
    function _bf_(_a_)
     {var
       _b_=0,
       _e_=0,
       _f_=0,
       _g_=
        [0,
         _D_
          (_a6_,
           [0,
            _X_
             (_bd_,
              _B_
               (_aN_,function(_a_){return [0,caml_js_to_string_G_(_a_)]},_a$_)),
            _f_],
           _e_),
         _b_],
       _h_=[0,_C_(_bg_),0],
       _i_=[0,_W_([0,_Y_(0),0],_h_),_g_],
       _j_=[0,_V_(0,[0,_C_(caml_new_string_c_(str_d_+_a_)),0]),_i_],
       _k_=[0,_C_(_bh_),0],
       _l_=[0,_W_([0,_Y_(1),0],_k_),_j_];
      return _V_
              ([0,
                _B_
                 (_a1_,"className",caml_js_expr_w_(_M_(_aY_,_M_(_bi_,_aX_)))),
                0],
               _l_)}
    function _a8_(_a_){return _aL_}
    function _a9_(_a_,_b_)
     {var
       _c_=
        typeof _a_==="number"
         ?0===_a_?_b_+1|0:_b_-1|0
         :caml_int_of_string_bn_(_a_[1]);
      return [0,_c_,_S_]}
    _elm_lang$core$Native_Platform.addPublicModule
     (_Z_,
      "Main",
      {"main":
       _m_
        (_a4_,
         {"init":function(_a_){return [0,_be_,_S_]},
          "update":_a9_,
          "subscriptions":_a8_,
          "view":_bf_})});
    _Z_.fullscreen();
    function _aF_(_a_)
     {var _b_=_a_;
      for(;;)
       {if(_b_)
         {var _c_=_b_[2],_d_=_b_[1];
          try {caml_ml_flush_bo_(_d_)}catch(_f_){}
          var _b_=_c_;
          continue}
        return 0}}
    _aF_(caml_ml_out_channels_list_bq_(0));
    return}
  (function(){return this}()));


// Generated by js_of_ocaml 2.7
(function(joo_global_object_S_)
   {"use strict";
    var
     str_N_=".",
     num_224_as_=224,
     str_Sys_error_ax_="Sys_error",
     str_M_="+",
     num_65535_ak_=65535,
     str_Invalid_argument_aI_="Invalid_argument",
     num_1024_x_=1024,
     num_70_375_ar_=70.375,
     num_57343_aw_=57343,
     num_82_916_aG_=82.916,
     num_512_aH_=512,
     str_End_of_file_aF_="End_of_file",
     str_7FD13B_aE_="#7FD13B",
     str_k_=" ",
     str_e_P_="e",
     str_elm_lang_core_N_abr_aC_="_elm_lang$core$Native_Platform.batch",
     str_Failure_aD_="Failure",
     str_Undefined_recurs_abr_aj_="Undefined_recursive_module",
     num_323_298_u_=323.298,
     str_v_="-",
     str_F0AD00_ap_="#F0AD00",
     str_Stack_overflow_aq_="Stack_overflow",
     str_d_="",
     num_128_e_=128,
     str_60B5CC_ah_="#60B5CC",
     num_56320_ai_=56320,
     str_file_already_abr_O_=" : file already exists",
     num_240_au_=240,
     num_2048_av_=2048,
     str_0_l_="0",
     num_248_a_=248,
     str_Not_found_ao_="Not_found",
     str_Assert_failure_af_="Assert_failure",
     str_ag_="/",
     str_Sys_blocked_io_aA_="Sys_blocked_io",
     str_fd_aB_="fd ",
     num_161_649_L_=161.649,
     str_Out_of_memory_at_="Out_of_memory",
     str_target_az_="target",
     str_Match_failure_an_="Match_failure",
     num_314_432_am_=314.432,
     str_Division_by_zero_ay_="Division_by_zero",
     num_1e3_al_=1e3;
    function raw_array_sub_T_(a_a_,i_b_,l_c_)
     {var b_e_=new Array(l_c_);
      for(var j_d_=0;j_d_<l_c_;j_d_++)b_e_[j_d_]=a_a_[i_b_+j_d_];
      return b_e_}
    function caml_subarray_to_string_R_(a_a_,i_b_,len_c_)
     {var f_e_=String.fromCharCode;
      if(i_b_==0&&len_c_<=4096&&len_c_==a_a_.length)
       return f_e_.apply(null,a_a_);
      var s_f_=str_d_;
      for(;0<len_c_;i_b_+=num_1024_x_,len_c_-=num_1024_x_)
       s_f_+=
       f_e_.apply
        (null,raw_array_sub_T_(a_a_,i_b_,Math.min(len_c_,num_1024_x_)));
      return s_f_}
    function caml_convert_string_to_array_aK_(s_a_)
     {var a_c_=new Array(s_a_.l),b_e_=s_a_.c,l_d_=b_e_.length,i_b_=0;
      for(;i_b_<l_d_;i_b_++)a_c_[i_b_]=b_e_.charCodeAt(i_b_);
      for(l_d_=s_a_.l;i_b_<l_d_;i_b_++)a_c_[i_b_]=0;
      s_a_.c=a_c_;
      s_a_.t=4;
      return a_c_}
    function caml_blit_string_r_(s1_a_,i1_b_,s2_c_,i2_d_,len_e_)
     {if(len_e_==0)return 0;
      if(i2_d_==0&&(len_e_>=s2_c_.l||s2_c_.t==2&&len_e_>=s2_c_.c.length))
       {s2_c_.c=
        s1_a_.t==4
         ?caml_subarray_to_string_R_(s1_a_.c,i1_b_,len_e_)
         :i1_b_==0&&s1_a_.c.length==len_e_
           ?s1_a_.c
           :s1_a_.c.substr(i1_b_,len_e_);
        s2_c_.t=s2_c_.c.length==s2_c_.l?0:2}
      else
       if(s2_c_.t==2&&i2_d_==s2_c_.c.length)
        {s2_c_.c+=
         s1_a_.t==4
          ?caml_subarray_to_string_R_(s1_a_.c,i1_b_,len_e_)
          :i1_b_==0&&s1_a_.c.length==len_e_
            ?s1_a_.c
            :s1_a_.c.substr(i1_b_,len_e_);
         s2_c_.t=s2_c_.c.length==s2_c_.l?0:2}
       else
        {if(s2_c_.t!=4)caml_convert_string_to_array_aK_(s2_c_);
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
    function raw_array_append_one_cd_(a_a_,x_b_)
     {var l_e_=a_a_.length,b_d_=new Array(l_e_+1),i_c_=0;
      for(;i_c_<l_e_;i_c_++)b_d_[i_c_]=a_a_[i_c_];
      b_d_[i_c_]=x_b_;
      return b_d_}
    function caml_call_gen_B_(f_c_,args_b_)
     {if(f_c_.fun)return caml_call_gen_B_(f_c_.fun,args_b_);
      var n_a_=f_c_.length,argsLen_d_=args_b_.length,d_e_=n_a_-argsLen_d_;
      if(d_e_==0)
       return f_c_.apply(null,args_b_);
      else
       if(d_e_<0)
        return caml_call_gen_B_
                (f_c_.apply(null,raw_array_sub_T_(args_b_,0,n_a_)),
                 raw_array_sub_T_(args_b_,n_a_,argsLen_d_-n_a_));
       else
        return function(x_a_)
         {return caml_call_gen_B_(f_c_,raw_array_append_one_cd_(args_b_,x_a_))}}
    function caml_str_repeat_b4_(n_a_,s_b_)
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
    function caml_convert_string_to_bytes_aL_(s_a_)
     {if(s_a_.t==2)
       s_a_.c+=caml_str_repeat_b4_(s_a_.l-s_a_.c.length,"\0");
      else
       s_a_.c=caml_subarray_to_string_R_(s_a_.c,0,s_a_.c.length);
      s_a_.t=0}
    function caml_is_ascii_aM_(s_a_)
     {if(s_a_.length<24)
       {for(var i_b_=0;i_b_<s_a_.length;i_b_++)
         if(s_a_.charCodeAt(i_b_)>127)return false;
        return true}
      else
       return !/[^\x00-\x7f]/.test(s_a_)}
    function caml_utf16_of_utf8_ca_(s_a_)
     {for
       (var
         b_l_=str_d_,
         t_f_=str_d_,
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
        if(c1_h_<num_128_e_)
         {for
           (var j_g_=i_c_+1;
            j_g_<
            l_k_&&
            (c1_h_=s_a_.charCodeAt(j_g_))<
            num_128_e_;
            j_g_++)
           ;
          if(j_g_-i_c_>num_512_aH_)
           {t_f_.substr(0,1);
            b_l_+=t_f_;
            t_f_=str_d_;
            b_l_+=s_a_.slice(i_c_,j_g_)}
          else
           t_f_+=s_a_.slice(i_c_,j_g_);
          if(j_g_==l_k_)break;
          i_c_=j_g_}
        v_b_=1;
        if(++i_c_<l_k_&&((c2_j_=s_a_.charCodeAt(i_c_))&-64)==num_128_e_)
         {c_i_=c2_j_+(c1_h_<<6);
          if(c1_h_<num_224_as_)
           {v_b_=c_i_-12416;if(v_b_<num_128_e_)v_b_=1}
          else
           {v_b_=2;
            if(++i_c_<l_k_&&((c2_j_=s_a_.charCodeAt(i_c_))&-64)==num_128_e_)
             {c_i_=c2_j_+(c_i_<<6);
              if(c1_h_<num_240_au_)
               {v_b_=c_i_-925824;
                if(v_b_<num_2048_av_||v_b_>=55295&&v_b_<57344)v_b_=2}
              else
               {v_b_=3;
                if
                 (++i_c_<
                  l_k_&&
                  ((c2_j_=s_a_.charCodeAt(i_c_))&-64)==
                  num_128_e_&&
                  c1_h_<
                  245)
                 {v_b_=c2_j_-63447168+(c_i_<<6);
                  if(v_b_<65536||v_b_>1114111)v_b_=3}}}}}
        if(v_b_<4)
         {i_c_-=v_b_;t_f_+="\ufffd"}
        else
         if(v_b_>num_65535_ak_)
          t_f_+=
          String.fromCharCode(55232+(v_b_>>10),num_56320_ai_+(v_b_&1023));
         else
          t_f_+=String.fromCharCode(v_b_);
        if(t_f_.length>num_1024_x_){t_f_.substr(0,1);b_l_+=t_f_;t_f_=str_d_}}
      return b_l_+t_f_}
    function caml_to_js_string_b$_(s_a_)
     {switch(s_a_.t)
       {case 9:return s_a_.c;
        default:caml_convert_string_to_bytes_aL_(s_a_);case 0:
         if(caml_is_ascii_aM_(s_a_.c)){s_a_.t=9;return s_a_.c}s_a_.t=8;
        case 8:return caml_utf16_of_utf8_ca_(s_a_.c)
        }}
    function MlString_i_(tag_a_,contents_b_,length_c_)
     {this.t=tag_a_;this.c=contents_b_;this.l=length_c_}
    MlString_i_.prototype.toString=
    function(){return caml_to_js_string_b$_(this)};
    function caml_raise_with_arg_b1_(tag_a_,arg_b_){throw [0,tag_a_,arg_b_]}
    function caml_new_string_c_(s_a_)
     {return new MlString_i_(0,s_a_,s_a_.length)}
    function caml_raise_with_string_aR_(tag_a_,msg_b_)
     {caml_raise_with_arg_b1_(tag_a_,caml_new_string_c_(msg_b_))}
    var caml_global_data_f_=[0];
    function caml_invalid_argument_C_(msg_a_)
     {caml_raise_with_string_aR_(caml_global_data_f_.Invalid_argument,msg_a_)}
    function caml_create_string_n_(len_a_)
     {if(len_a_<0)caml_invalid_argument_C_("String.create");
      return new MlString_i_(len_a_?2:9,str_d_,len_a_)}
    function caml_bytes_of_string_aJ_(s_a_)
     {if((s_a_.t&6)!=0)caml_convert_string_to_bytes_aL_(s_a_);return s_a_.c}
    function caml_parse_format_b0_(fmt_a_)
     {fmt_a_=caml_bytes_of_string_aJ_(fmt_a_);
      var len_e_=fmt_a_.length;
      if(len_e_>31)caml_invalid_argument_C_("format_int: format too long");
      var
       f_b_=
        {justify:str_M_,
         signstyle:str_v_,
         filler:str_k_,
         alternate:false,
         base:0,
         signedconv:false,
         width:0,
         uppercase:false,
         sign:1,
         prec:-1,
         conv:"f"};
      for(var i_d_=0;i_d_<len_e_;i_d_++)
       {var c_c_=fmt_a_.charAt(i_d_);
        switch(c_c_)
         {case "-":f_b_.justify=str_v_;break;
          case "+":
          case " ":f_b_.signstyle=c_c_;break;
          case "0":f_b_.filler=str_0_l_;break;
          case "#":f_b_.alternate=true;break;
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
           f_b_.width=0;
           while(c_c_=fmt_a_.charCodeAt(i_d_)-48,c_c_>=0&&c_c_<=9)
            {f_b_.width=f_b_.width*10+c_c_;i_d_++}
           i_d_--;
           break;
          case ".":
           f_b_.prec=0;
           i_d_++;
           while(c_c_=fmt_a_.charCodeAt(i_d_)-48,c_c_>=0&&c_c_<=9)
            {f_b_.prec=f_b_.prec*10+c_c_;i_d_++}
           i_d_--;
          case "d":
          case "i":f_b_.signedconv=true;
          case "u":f_b_.base=10;break;
          case "x":f_b_.base=16;break;
          case "X":f_b_.base=16;f_b_.uppercase=true;break;
          case "o":f_b_.base=8;break;
          case "e":
          case "f":
          case "g":f_b_.signedconv=true;f_b_.conv=c_c_;break;
          case "E":
          case "F":
          case "G":
           f_b_.signedconv=true;
           f_b_.uppercase=true;
           f_b_.conv=c_c_.toLowerCase();
           break
          }}
      return f_b_}
    function caml_finish_formatting_bQ_(f_a_,rawbuffer_b_)
     {if(f_a_.uppercase)rawbuffer_b_=rawbuffer_b_.toUpperCase();
      var len_g_=rawbuffer_b_.length;
      if(f_a_.signedconv&&(f_a_.sign<0||f_a_.signstyle!=str_v_))len_g_++;
      if(f_a_.alternate){if(f_a_.base==8)len_g_+=1;if(f_a_.base==16)len_g_+=2}
      var buffer_e_=str_d_;
      if(f_a_.justify==str_M_&&f_a_.filler==str_k_)
       for(var i_f_=len_g_;i_f_<f_a_.width;i_f_++)buffer_e_+=str_k_;
      if(f_a_.signedconv)
       if(f_a_.sign<0)
        buffer_e_+=str_v_;
       else
        if(f_a_.signstyle!=str_v_)buffer_e_+=f_a_.signstyle;
      if(f_a_.alternate&&f_a_.base==8)buffer_e_+=str_0_l_;
      if(f_a_.alternate&&f_a_.base==16)buffer_e_+="0x";
      if(f_a_.justify==str_M_&&f_a_.filler==str_0_l_)
       for(var i_f_=len_g_;i_f_<f_a_.width;i_f_++)buffer_e_+=str_0_l_;
      buffer_e_+=rawbuffer_b_;
      if(f_a_.justify==str_v_)
       for(var i_f_=len_g_;i_f_<f_a_.width;i_f_++)buffer_e_+=str_k_;
      return caml_new_string_c_(buffer_e_)}
    function caml_format_float_bR_(fmt_a_,x_b_)
     {var
       s_c_,
       f_f_=caml_parse_format_b0_(fmt_a_),
       prec_e_=f_f_.prec<0?6:f_f_.prec;
      if(x_b_<0){f_f_.sign=-1;x_b_=-x_b_}
      if(isNaN(x_b_))
       {s_c_="nan";f_f_.filler=str_k_}
      else
       if(!isFinite(x_b_))
        {s_c_="inf";f_f_.filler=str_k_}
       else
        switch(f_f_.conv)
         {case "e":
           var s_c_=x_b_.toExponential(prec_e_),i_d_=s_c_.length;
           if(s_c_.charAt(i_d_-3)==str_e_P_)
            s_c_=s_c_.slice(0,i_d_-1)+str_0_l_+s_c_.slice(i_d_-1);
           break;
          case "f":s_c_=x_b_.toFixed(prec_e_);break;
          case "g":
           prec_e_=prec_e_?prec_e_:1;
           s_c_=x_b_.toExponential(prec_e_-1);
           var j_i_=s_c_.indexOf(str_e_P_),exp_h_=+s_c_.slice(j_i_+1);
           if(exp_h_<-4||x_b_>=1e+21||x_b_.toFixed(0).length>prec_e_)
            {var i_d_=j_i_-1;
             while(s_c_.charAt(i_d_)==str_0_l_)i_d_--;
             if(s_c_.charAt(i_d_)==str_N_)i_d_--;
             s_c_=s_c_.slice(0,i_d_+1)+s_c_.slice(j_i_);
             i_d_=s_c_.length;
             if(s_c_.charAt(i_d_-3)==str_e_P_)
              s_c_=s_c_.slice(0,i_d_-1)+str_0_l_+s_c_.slice(i_d_-1);
             break}
           else
            {var p_g_=prec_e_;
             if(exp_h_<0)
              {p_g_-=exp_h_+1;s_c_=x_b_.toFixed(p_g_)}
             else
              while(s_c_=x_b_.toFixed(p_g_),s_c_.length>prec_e_+1)p_g_--;
             if(p_g_)
              {var i_d_=s_c_.length-1;
               while(s_c_.charAt(i_d_)==str_0_l_)i_d_--;
               if(s_c_.charAt(i_d_)==str_N_)i_d_--;
               s_c_=s_c_.slice(0,i_d_+1)}}
           break
          }
      return caml_finish_formatting_bQ_(f_f_,s_c_)}
    var caml_oo_last_id_bZ_=0;
    function caml_fresh_oo_id_y_(){return caml_oo_last_id_bZ_++}
    function js_print_stderr_aT_(s_a_)
     {if(s_a_.charCodeAt(s_a_.length-1)==10)s_a_=s_a_.substr(0,s_a_.length-1);
      var v_b_=joo_global_object_S_.console;
      v_b_&&v_b_.error&&v_b_.error(s_a_)}
    function caml_js_expr_aN_(s_a_)
     {js_print_stderr_aT_("caml_js_expr: fallback to runtime evaluation");
      return eval(s_a_.toString())}
    function caml_utf8_of_utf16_cb_(s_a_)
     {for
       (var b_h_=str_d_,t_c_=b_h_,c_b_,d_j_,i_f_=0,l_i_=s_a_.length;
        i_f_<
        l_i_;
        i_f_++)
       {c_b_=s_a_.charCodeAt(i_f_);
        if(c_b_<num_128_e_)
         {for
           (var j_g_=i_f_+1;
            j_g_<
            l_i_&&
            (c_b_=s_a_.charCodeAt(j_g_))<
            num_128_e_;
            j_g_++)
           ;
          if(j_g_-i_f_>num_512_aH_)
           {t_c_.substr(0,1);
            b_h_+=t_c_;
            t_c_=str_d_;
            b_h_+=s_a_.slice(i_f_,j_g_)}
          else
           t_c_+=s_a_.slice(i_f_,j_g_);
          if(j_g_==l_i_)break;
          i_f_=j_g_}
        if(c_b_<num_2048_av_)
         {t_c_+=String.fromCharCode(192|c_b_>>6);
          t_c_+=String.fromCharCode(num_128_e_|c_b_&63)}
        else
         if(c_b_<55296||c_b_>=num_57343_aw_)
          t_c_+=
          String.fromCharCode
           (num_224_as_|c_b_>>12,num_128_e_|c_b_>>6&63,num_128_e_|c_b_&63);
         else
          if
           (c_b_>=
            56319||
            i_f_+
            1==
            l_i_||
            (d_j_=s_a_.charCodeAt(i_f_+1))<
            num_56320_ai_||
            d_j_>
            num_57343_aw_)
           t_c_+="\xef\xbf\xbd";
          else
           {i_f_++;
            c_b_=(c_b_<<10)+d_j_-56613888;
            t_c_+=
            String.fromCharCode
             (num_240_au_|c_b_>>18,
              num_128_e_|c_b_>>12&63,
              num_128_e_|c_b_>>6&63,
              num_128_e_|c_b_&63)}
        if(t_c_.length>num_1024_x_){t_c_.substr(0,1);b_h_+=t_c_;t_c_=str_d_}}
      return b_h_+t_c_}
    function caml_js_to_string_aO_(s_a_)
     {var tag_b_=9;
      if(!caml_is_ascii_aM_(s_a_))tag_b_=8,s_a_=caml_utf8_of_utf16_cb_(s_a_);
      return new MlString_i_(tag_b_,s_a_,s_a_.length)}
    function caml_raise_sys_error_h_(msg_a_)
     {caml_raise_with_string_aR_(caml_global_data_f_.Sys_error,msg_a_)}
    function caml_ml_flush_bT_(oc_a_)
     {if(!oc_a_.opened)
       caml_raise_sys_error_h_("Cannot flush a closed channel");
      if(oc_a_.buffer==str_d_)return 0;
      if(oc_a_.output)
       switch(oc_a_.output.length)
        {case 2:oc_a_.output(oc_a_,oc_a_.buffer);break;
         default:oc_a_.output(oc_a_.buffer)}
      oc_a_.buffer=str_d_;
      return 0}
    var file_inode_aS_=0;
    function unix_gettimeofday_ce_(){return new Date().getTime()/num_1e3_al_}
    function unix_time_U_(){return Math.floor(unix_gettimeofday_ce_())}
    function MlFile_m_(content_a_)
     {this.data=content_a_;
      this.inode=file_inode_aS_++;
      var now_b_=unix_time_U_();
      this.atime=now_b_;
      this.mtime=now_b_;
      this.ctime=now_b_}
    MlFile_m_.prototype=
    {truncate:function(){this.data=caml_create_string_n_(0);this.modified()},
     modified:
     function(){var now_a_=unix_time_U_();this.atime=now_a_;this.mtime=now_a_}};
    function caml_ml_string_length_g_(s_a_){return s_a_.l}
    function caml_raise_no_such_file_aQ_(name_a_)
     {name_a_=name_a_ instanceof MlString_i_?name_a_.toString():name_a_;
      caml_raise_sys_error_h_(name_a_+": No such file or directory")}
    var caml_current_dir_bP_=str_ag_;
    function caml_make_path_D_(name_a_)
     {name_a_=name_a_ instanceof MlString_i_?name_a_.toString():name_a_;
      if(name_a_.charCodeAt(0)!=47)name_a_=caml_current_dir_bP_+name_a_;
      var comp_e_=name_a_.split(str_ag_),ncomp_b_=[];
      for(var i_c_=0;i_c_<comp_e_.length;i_c_++)
       switch(comp_e_[i_c_])
        {case "..":if(ncomp_b_.length>1)ncomp_b_.pop();break;
         case ".":break;
         case "":if(ncomp_b_.length==0)ncomp_b_.push(str_d_);break;
         default:ncomp_b_.push(comp_e_[i_c_]);break}
      ncomp_b_.orig=name_a_;
      return ncomp_b_}
    function MlDir_q_()
     {this.content={};
      this.inode=file_inode_aS_++;
      var now_a_=unix_time_U_();
      this.atime=now_a_;
      this.mtime=now_a_;
      this.ctime=now_a_}
    MlDir_q_.prototype=
    {exists:function(name_a_){return this.content[name_a_]?1:0},
     mk:function(name_a_,c_b_){this.content[name_a_]=c_b_},
     get:function(name_a_){return this.content[name_a_]},
     list:
     function()
      {var a_a_=[];for(var n_b_ in this.content)a_a_.push(n_b_);return a_a_},
     remove:function(name_a_){delete this.content[name_a_]}};
    var caml_root_dir_F_=new MlDir_q_();
    caml_root_dir_F_.mk(str_d_,new MlDir_q_());
    function caml_fs_content_Q_(path_a_)
     {var dir_b_=caml_root_dir_F_;
      for(var i_c_=0;i_c_<path_a_.length;i_c_++)
       {if(!(dir_b_.exists&&dir_b_.exists(path_a_[i_c_])))
         caml_raise_no_such_file_aQ_(path_a_.orig);
        dir_b_=dir_b_.get(path_a_[i_c_])}
      return dir_b_}
    function caml_sys_is_directory_b__(name_a_)
     {var
       path_c_=caml_make_path_D_(name_a_),
       dir_b_=caml_fs_content_Q_(path_c_);
      return dir_b_ instanceof MlDir_q_?1:0}
    function caml_string_of_array_b7_(a_a_)
     {return new MlString_i_(4,a_a_,a_a_.length)}
    function caml_array_of_string_cf_(s_a_)
     {if(s_a_.t!=4)caml_convert_string_to_array_aK_(s_a_);return s_a_.c}
    function caml_fs_register_bS_(name_a_,content_b_)
     {var path_f_=caml_make_path_D_(name_a_),dir_d_=caml_root_dir_F_;
      for(var i_g_=0;i_g_<path_f_.length-1;i_g_++)
       {var d_e_=path_f_[i_g_];
        if(!dir_d_.exists(d_e_))dir_d_.mk(d_e_,new MlDir_q_());
        dir_d_=dir_d_.get(d_e_);
        if(!(dir_d_ instanceof MlDir_q_))
         caml_raise_sys_error_h_(path_f_.orig+str_file_already_abr_O_)}
      var d_e_=path_f_[path_f_.length-1];
      if(dir_d_.exists(d_e_))
       caml_raise_sys_error_h_(path_f_.orig+str_file_already_abr_O_);
      if(content_b_ instanceof MlDir_q_)
       dir_d_.mk(d_e_,content_b_);
      else
       if(content_b_ instanceof MlFile_m_)
        dir_d_.mk(d_e_,content_b_);
       else
        if(content_b_ instanceof MlString_i_)
         dir_d_.mk(d_e_,new MlFile_m_(content_b_));
        else
         if(content_b_ instanceof Array)
          dir_d_.mk(d_e_,new MlFile_m_(caml_string_of_array_b7_(content_b_)));
         else
          if(content_b_.toString)
           dir_d_.mk
            (d_e_,new MlFile_m_(caml_new_string_c_(content_b_.toString())));
          else
           caml_invalid_argument_C_("caml_fs_register");
      return 0}
    function caml_sys_file_exists_b9_(name_a_)
     {var
       dir_b_=caml_root_dir_F_,
       path_d_=caml_make_path_D_(name_a_),
       auto_load_e_,
       pos_f_;
      for(var i_c_=0;i_c_<path_d_.length;i_c_++)
       {if(dir_b_.auto){auto_load_e_=dir_b_.auto;pos_f_=i_c_}
        if(!(dir_b_.exists&&dir_b_.exists(path_d_[i_c_])))
         return auto_load_e_?auto_load_e_(path_d_,pos_f_):0;
        dir_b_=dir_b_.get(path_d_[i_c_])}
      return 1}
    function caml_sys_open_internal_z_(idx_a_,file_b_,flags_c_)
     {if(caml_global_data_f_.fds===undefined)
       caml_global_data_f_.fds=new Array();
      flags_c_=flags_c_?flags_c_:{};
      var info_d_={};
      info_d_.file=file_b_;
      info_d_.offset=flags_c_.append?caml_ml_string_length_g_(file_b_.data):0;
      info_d_.flags=flags_c_;
      caml_global_data_f_.fds[idx_a_]=info_d_;
      caml_global_data_f_.fd_last_idx=idx_a_;
      return idx_a_}
    function caml_sys_open_cg_(name_a_,flags_b_,perms_c_)
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
      var name2_g_=name_a_.toString(),path_j_=caml_make_path_D_(name_a_);
      if(f_d_.rdonly&&f_d_.wronly)
       caml_raise_sys_error_h_
        (name2_g_+" : flags Open_rdonly and Open_wronly are not compatible");
      if(f_d_.text&&f_d_.binary)
       caml_raise_sys_error_h_
        (name2_g_+" : flags Open_text and Open_binary are not compatible");
      if(caml_sys_file_exists_b9_(name_a_))
       {if(caml_sys_is_directory_b__(name_a_))
         caml_raise_sys_error_h_(name2_g_+" : is a directory");
        if(f_d_.create&&f_d_.excl)
         caml_raise_sys_error_h_(name2_g_+str_file_already_abr_O_);
        var
         idx_i_=
          caml_global_data_f_.fd_last_idx?caml_global_data_f_.fd_last_idx:0,
         file_e_=caml_fs_content_Q_(path_j_);
        if(f_d_.truncate)file_e_.truncate();
        return caml_sys_open_internal_z_(idx_i_+1,file_e_,f_d_)}
      else
       if(f_d_.create)
        {var
          idx_i_=
           caml_global_data_f_.fd_last_idx?caml_global_data_f_.fd_last_idx:0;
         caml_fs_register_bS_(name_a_,caml_create_string_n_(0));
         var file_e_=caml_fs_content_Q_(path_j_);
         return caml_sys_open_internal_z_(idx_i_+1,file_e_,f_d_)}
       else
        caml_raise_no_such_file_aQ_(name_a_)}
    caml_sys_open_internal_z_(0,new MlFile_m_(caml_create_string_n_(0)));
    caml_sys_open_internal_z_(1,new MlFile_m_(caml_create_string_n_(0)));
    caml_sys_open_internal_z_(2,new MlFile_m_(caml_create_string_n_(0)));
    function caml_ml_open_descriptor_in_bU_(fd_a_)
     {var data_b_=caml_global_data_f_.fds[fd_a_];
      if(data_b_.flags.wronly)
       caml_raise_sys_error_h_(str_fd_aB_+fd_a_+" is writeonly");
      return {file:data_b_.file,
              offset:data_b_.offset,
              fd:fd_a_,
              opened:true,
              refill:null}}
    function js_print_stdout_cc_(s_a_)
     {if(s_a_.charCodeAt(s_a_.length-1)==10)s_a_=s_a_.substr(0,s_a_.length-1);
      var v_b_=joo_global_object_S_.console;
      v_b_&&v_b_.log&&v_b_.log(s_a_)}
    var caml_ml_out_channels_E_=new Array();
    function caml_std_output_b3_(chan_a_,s_b_)
     {var
       str_i_=caml_new_string_c_(s_b_),
       slen_d_=caml_ml_string_length_g_(str_i_),
       clen_h_=caml_ml_string_length_g_(chan_a_.file.data),
       offset_f_=chan_a_.offset;
      if(offset_f_+slen_d_>=clen_h_)
       {var new_str_e_=caml_create_string_n_(offset_f_+slen_d_);
        caml_blit_string_r_(chan_a_.file.data,0,new_str_e_,0,clen_h_);
        caml_blit_string_r_(str_i_,0,new_str_e_,offset_f_,slen_d_);
        chan_a_.file.data=new_str_e_}
      chan_a_.offset+=slen_d_;
      chan_a_.file.modified();
      return 0}
    function caml_ml_open_descriptor_out_aP_(fd_a_)
     {var output_b_;
      switch(fd_a_)
       {case 1:output_b_=js_print_stdout_cc_;break;
        case 2:output_b_=js_print_stderr_aT_;break;
        default:output_b_=caml_std_output_b3_}
      var data_e_=caml_global_data_f_.fds[fd_a_];
      if(data_e_.flags.rdonly)
       caml_raise_sys_error_h_(str_fd_aB_+fd_a_+" is readonly");
      var
       channel_c_=
        {file:data_e_.file,
         offset:data_e_.offset,
         fd:fd_a_,
         opened:true,
         buffer:str_d_,
         output:output_b_};
      caml_ml_out_channels_E_[channel_c_.fd]=channel_c_;
      return channel_c_}
    function caml_ml_out_channels_list_bV_()
     {var l_a_=0;
      for(var c_b_ in caml_ml_out_channels_E_)
       if(caml_ml_out_channels_E_[c_b_].opened)
        l_a_=[0,caml_ml_out_channels_E_[c_b_],l_a_];
      return l_a_}
    if(!Math.imul)
     Math.imul=
     function(x_a_,y_b_)
      {y_b_|=0;return ((x_a_>>16)*y_b_<<16)+(x_a_&num_65535_ak_)*y_b_|0};
    var caml_mul_bW_=Math.imul;
    function caml_obj_tag_bY_(x_a_)
     {return x_a_ instanceof Array
              ?x_a_[0]
              :x_a_ instanceof MlString_i_?252:num_1e3_al_}
    function caml_register_global_b_(n_a_,v_b_,name_opt_c_)
     {caml_global_data_f_[n_a_+1]=v_b_;
      if(name_opt_c_)caml_global_data_f_[name_opt_c_]=v_b_}
    var caml_named_values_bX_={};
    function caml_register_named_value_b2_(nm_a_,v_b_)
     {caml_named_values_bX_[caml_bytes_of_string_aJ_(nm_a_)]=v_b_;return 0}
    function caml_string_bound_error_b5_()
     {caml_invalid_argument_C_("index out of bounds")}
    function caml_string_unsafe_get_b8_(s_a_,i_b_)
     {switch(s_a_.t&6)
       {default:if(i_b_>=s_a_.c.length)return 0;case 0:return s_a_.c.charCodeAt(i_b_);
        case 4:return s_a_.c[i_b_]
        }}
    function caml_string_get_b6_(s_a_,i_b_)
     {if(i_b_>>>0>=s_a_.l)caml_string_bound_error_b5_();
      return caml_string_unsafe_get_b8_(s_a_,i_b_)}
    function caml_call_gen1_ae_(fun_a_,var0_b_)
     {return fun_a_.length==1
              ?fun_a_(var0_b_)
              :caml_call_gen_B_(fun_a_,[var0_b_])}
    var _V_=caml_new_string_c_(str_N_);
    caml_register_global_b_
     (11,
      [num_248_a_,caml_new_string_c_(str_Undefined_recurs_abr_aj_),-12],
      str_Undefined_recurs_abr_aj_);
    caml_register_global_b_
     (10,
      [num_248_a_,caml_new_string_c_(str_Assert_failure_af_),-11],
      str_Assert_failure_af_);
    caml_register_global_b_
     (9,
      [num_248_a_,caml_new_string_c_(str_Sys_blocked_io_aA_),-10],
      str_Sys_blocked_io_aA_);
    caml_register_global_b_
     (8,
      [num_248_a_,caml_new_string_c_(str_Stack_overflow_aq_),-9],
      str_Stack_overflow_aq_);
    caml_register_global_b_
     (7,
      [num_248_a_,caml_new_string_c_(str_Match_failure_an_),-8],
      str_Match_failure_an_);
    caml_register_global_b_
     (6,
      [num_248_a_,caml_new_string_c_(str_Not_found_ao_),-7],
      str_Not_found_ao_);
    caml_register_global_b_
     (5,
      [num_248_a_,caml_new_string_c_(str_Division_by_zero_ay_),-6],
      str_Division_by_zero_ay_);
    caml_register_global_b_
     (4,
      [num_248_a_,caml_new_string_c_(str_End_of_file_aF_),-5],
      str_End_of_file_aF_);
    caml_register_global_b_
     (3,
      [num_248_a_,caml_new_string_c_(str_Invalid_argument_aI_),-4],
      str_Invalid_argument_aI_);
    caml_register_global_b_
     (2,[num_248_a_,caml_new_string_c_(str_Failure_aD_),-3],str_Failure_aD_);
    caml_register_global_b_
     (1,
      [num_248_a_,caml_new_string_c_(str_Sys_error_ax_),-2],
      str_Sys_error_ax_);
    caml_register_global_b_
     (0,
      [num_248_a_,caml_new_string_c_(str_Out_of_memory_at_),-1],
      str_Out_of_memory_at_);
    caml_fresh_oo_id_y_(0);
    caml_ml_open_descriptor_in_bU_(0);
    caml_ml_open_descriptor_out_aP_(1);
    caml_ml_open_descriptor_out_aP_(2);
    var
     _aU_=caml_new_string_c_("%.12g"),
     _aW_=caml_new_string_c_(str_d_),
     _aZ_=caml_new_string_c_("Js.Error"),
     _a0_=caml_new_string_c_("_elm_lang$core$Native_Json.identity"),
     _a9_=caml_new_string_c_("_elm_lang$core$Native_Json.decodeField"),
     _a1_=caml_new_string_c_("_elm_lang$core$Native_Json.decodePrimitive"),
     _a2_=caml_new_string_c_("string"),
     _a4_=caml_new_string_c_("int"),
     _a6_=caml_new_string_c_("float"),
     _a7_=caml_new_string_c_("bool"),
     _a$_=caml_new_string_c_(str_elm_lang_core_N_abr_aC_),
     _a__=caml_new_string_c_(str_elm_lang_core_N_abr_aC_),
     _bd_=
      caml_new_string_c_
       ("_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags"),
     _bc_=
      caml_new_string_c_("_elm_lang$virtual_dom$Native_VirtualDom.attribute"),
     _bb_=
      caml_new_string_c_("_elm_lang$virtual_dom$Native_VirtualDom.property"),
     _bg_=
      [0,caml_new_string_c_(str_target_az_),[0,caml_new_string_c_("value"),0]],
     _bh_=
      [0,
       caml_new_string_c_(str_target_az_),
       [0,caml_new_string_c_("checked"),0]],
     _bi_=caml_new_string_c_("keyCode"),
     _bx_=caml_new_string_c_("fill"),
     _bw_=caml_new_string_c_("y"),
     _bv_=caml_new_string_c_("x"),
     _bu_=caml_new_string_c_("width"),
     _bs_=caml_new_string_c_(str_k_),
     _bt_=caml_new_string_c_("viewBox"),
     _br_=caml_new_string_c_("transform"),
     _bo_=caml_new_string_c_(","),
     _bp_=caml_new_string_c_(str_k_),
     _bq_=caml_new_string_c_("points"),
     _bn_=caml_new_string_c_("height"),
     _bm_=caml_new_string_c_("rect"),
     _bl_=caml_new_string_c_("polygon"),
     _bk_=caml_new_string_c_("svg"),
     _bj_=caml_new_string_c_("http://www.w3.org/2000/svg"),
     _bA_=
      [0,
       [0,num_161_649_L_,170.517],
       [0,[0,8.869,num_323_298_u_],[0,[0,314.43,num_323_298_u_],0]]],
     _bB_=caml_new_string_c_(str_60B5CC_ah_),
     _bC_=
      [0,
       [0,255.522,246.655],
       [0,[0,num_323_298_u_,num_314_432_am_],[0,[0,num_323_298_u_,178.879],0]]],
     _bD_=caml_new_string_c_(str_F0AD00_ap_),
     _bE_=
      [0,
       [0,152.781,num_161_649_L_],
       [0,[0,0,8.868],[0,[0,0,num_314_432_am_],0]]],
     _bF_=caml_new_string_c_("#5A6378"),
     _bG_=
      [0,
       [0,num_323_298_u_,143.724],
       [0,[0,num_323_298_u_,0],[0,[0,179.573,0],0]]],
     _bH_=caml_new_string_c_(str_60B5CC_ah_),
     _bI_=
      caml_new_string_c_
       ("matrix(0.7071 0.7071 -0.7071 0.7071 186.4727 -127.2386)"),
     _bJ_=caml_new_string_c_(str_7FD13B_aE_),
     _bK_=
      [0,
       [0,8.867,0],
       [0,
        [0,79.241,num_70_375_ar_],
        [0,[0,232.213,num_70_375_ar_],[0,[0,161.838,0],0]]]],
     _bL_=caml_new_string_c_(str_7FD13B_aE_),
     _bM_=
      [0,
       [0,num_161_649_L_,152.782],
       [0,[0,231.514,num_82_916_aG_],[0,[0,91.783,num_82_916_aG_],0]]],
     _bN_=caml_new_string_c_(str_F0AD00_ap_),
     _bO_=[0,0,[0,0,[0,323.141,[0,322.95,0]]]];
    function _G_(_a_,_b_)
     {if(_b_)
       {var _c_=_b_[2],_d_=caml_call_gen1_ae_(_a_,_b_[1]);
        return [0,_d_,_G_(_a_,_c_)]}
      return 0}
    function _W_(_a_,_b_)
     {var _c_=_b_;
      for(;;)
       {if(_c_)
         {var _d_=_c_[2];caml_call_gen1_ae_(_a_,_c_[1]);var _c_=_d_;continue}
        return 0}}
    function _H_(_d_,_b_)
     {if(_b_)
       {var _a_=_b_[1],_h_=[0,0],_f_=[0,0],_i_=_b_[2];
        _W_
         (function(_a_)
           {_h_[1]++;_f_[1]=_f_[1]+caml_ml_string_length_g_(_a_)|0;return 0},
          _b_);
        var
         _e_=
          caml_create_string_n_
           (_f_[1]+caml_mul_bW_(caml_ml_string_length_g_(_d_),_h_[1]-1|0)|0);
        caml_blit_string_r_(_a_,0,_e_,0,caml_ml_string_length_g_(_a_));
        var _c_=[0,caml_ml_string_length_g_(_a_)];
        _W_
         (function(_a_)
           {caml_blit_string_r_
             (_d_,0,_e_,_c_[1],caml_ml_string_length_g_(_d_));
            _c_[1]=_c_[1]+caml_ml_string_length_g_(_d_)|0;
            caml_blit_string_r_
             (_a_,0,_e_,_c_[1],caml_ml_string_length_g_(_a_));
            _c_[1]=_c_[1]+caml_ml_string_length_g_(_a_)|0;
            return 0},
          _i_);
        return _e_}
      return _aW_}
    caml_fresh_oo_id_y_(0);
    caml_fresh_oo_id_y_(0);
    caml_fresh_oo_id_y_(0);
    var _X_=[0,0];
    function _Y_(_a_){_X_[1]=[0,_a_,_X_[1]];return 0}
    var
     _aY_=joo_global_object_S_.Array,
     _Z_=[num_248_a_,_aZ_,caml_fresh_oo_id_y_(0)],
     _I_=[0,_Z_,{}],
     _aX_=caml_obj_tag_bY_(_I_)===num_248_a_?_I_:_I_[1];
    caml_register_named_value_b2_(caml_new_string_c_("jsError"),_aX_);
    _Y_
     (function(_a_)
       {return _a_[1]===_Z_?[0,caml_js_to_string_aO_(_a_[2].toString())]:0});
    _Y_
     (function(_a_)
       {return _a_ instanceof _aY_?0:[0,caml_js_to_string_aO_(_a_.toString())]});
    function _w_(_a_,_b_){return caml_js_expr_aN_(_a_)(_b_)}
    function _J_(_a_,_b_,_c_){return A2(caml_js_expr_aN_(_a_),_b_,_c_)}
    function _A_(_a_){return _w_(_a1_,_a_)}
    var _a3_=_A_(_a2_),_a5_=_A_(_a4_);
    _A_(_a6_);
    var _a8_=_A_(_a7_);
    function ___(_a_,_b_){return _J_(_a9_,_a_,_b_)}
    function _$_(_a_,_b_)
     {var _d_=_b_,_c_=_a_;
      for(;;)
       {if(_c_){var _e_=_c_[2],_d_=___(_d_,_c_[1]),_c_=_e_;continue}
        return _d_}}
    var _aa_=_w_(_a__,[0]),_ba_=_w_(_a$_,[0]);
    function _j_(_a_,_b_){return _J_(_bc_,_a_.toString(),_b_.toString())}
    _$_(_bg_,_a3_);
    _$_(_bh_,_a8_);
    ___(_bi_,_a5_);
    function _K_(_a_,_b_,_c_)
     {var _d_=[0,_J_(_bb_,"namespace",_w_(_a0_,_bj_)),_b_];
      return A3
              (_elm_lang$virtual_dom$Native_VirtualDom.node,
               _a_.toString(),
               _d_,
               _c_)}
    function _s_(_a_,_b_){return _K_(_bl_,_a_,_b_)}
    function _o_(_a_)
     {if(0===(_a_==Math.floor(_a_)?1:0))
       {var
         _b_=caml_format_float_bR_(_aU_,_a_),
         _e_=0,
         _k_=caml_ml_string_length_g_(_b_);
        for(;;)
         {if(_k_<=_e_)
           {var
             _f_=caml_ml_string_length_g_(_b_),
             _j_=caml_ml_string_length_g_(_V_),
             _h_=caml_create_string_n_(_f_+_j_|0);
            caml_blit_string_r_(_b_,0,_h_,0,_f_);
            caml_blit_string_r_(_V_,0,_h_,_f_,_j_);
            return _h_}
          var
           _i_=caml_string_get_b6_(_b_,_e_),
           switch_l_=48<=_i_?58<=_i_?0:1:45===_i_?1:0;
          if(switch_l_){var _e_=_e_+1|0;continue}
          return _b_}}
      return caml_new_string_c_(str_d_+(_a_|0))}
    function _t_(_a_)
     {return _j_
              (_bq_,
               _H_
                (_bp_,
                 _G_
                  (function(_a_)
                    {var _b_=[0,_o_(_a_[2]),0];
                     return _H_(_bo_,[0,_o_(_a_[1]),_b_])},
                   _a_)))}
    function _ab_(_a_){return _j_(_bv_,_o_(_a_))}
    function _ac_(_a_){return _j_(_bw_,_o_(_a_))}
    function _p_(_a_){return _j_(_bx_,_a_)}
    var _ad_={},_by_=0;
    function _bz_(_a_)
     {var
       _b_=[0,_t_(_bA_),0],
       _c_=[0,_s_([0,_p_(_bB_),_b_],0),0],
       _d_=[0,_t_(_bC_),0],
       _e_=[0,_s_([0,_p_(_bD_),_d_],0),_c_],
       _f_=[0,_t_(_bE_),0],
       _g_=[0,_s_([0,_p_(_bF_),_f_],0),_e_],
       _h_=[0,_t_(_bG_),0],
       _i_=[0,_s_([0,_p_(_bH_),_h_],0),_g_],
       _k_=[0,_j_(_br_,_bI_),0],
       _l_=[0,_j_(_bn_,_o_(108.167)),_k_],
       _m_=[0,_j_(_bu_,_o_(107.676)),_l_],
       _n_=[0,_ac_(107.392),_m_],
       _q_=[0,_ab_(192.99),_n_],
       _r_=[0,_K_(_bm_,[0,_p_(_bJ_),_q_],0),_i_],
       _u_=[0,_t_(_bK_),0],
       _v_=[0,_s_([0,_p_(_bL_),_u_],0),_r_],
       _w_=[0,_t_(_bM_),0],
       _x_=[0,_s_([0,_p_(_bN_),_w_],0),_v_],
       _y_=[0,_j_(_bt_,_H_(_bs_,_G_(_o_,_bO_))),0],
       _z_=[0,_ac_(0),_y_];
      return _K_(_bk_,[0,_ab_(0),_z_],_x_)}
    function _be_(_a_){return _ba_}
    function _bf_(_a_,_b_){return [0,0,_aa_]}
    _elm_lang$core$Native_Platform.addPublicModule
     (_ad_,
      "Main",
      {"main":
       _w_
        (_bd_,
         {"init":function(_a_){return [0,_by_,_aa_]},
          "update":_bf_,
          "subscriptions":_be_,
          "view":_bz_})});
    _ad_.fullscreen();
    function _aV_(_a_)
     {var _b_=_a_;
      for(;;)
       {if(_b_)
         {var _c_=_b_[2],_d_=_b_[1];
          try {caml_ml_flush_bT_(_d_)}catch(_f_){}
          var _b_=_c_;
          continue}
        return 0}}
    _aV_(caml_ml_out_channels_list_bV_(0));
    return}
  (function(){return this}()));
